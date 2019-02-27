import Express from 'express';
import path from 'path';
// import request from 'request';
import http from 'http';

const app = Express();
const port = 3800;

// const socketBase = 'http://unix:/tmp/docker.sock'

app.use((req, res) => {
    const requestPath = path.parse(req.path);
    console.log('requestPath', requestPath);
    console.log('req.path', req.path);
    if (!requestPath.ext) {
        // request(`${socketBase}/${req.path}`, (error, response, body) => {
        //     console.log('error', error);
        //     console.log('response.body', response.body);
        //     console.log('body', body);
        // });

        const options = {
          socketPath: '/tmp/docker.sock',
          path: req.path
        };

        const callback = (resp: any) => {
          console.log(`STATUS: ${resp.statusCode}`);

            var body = '';

            resp.on('data', (chunk: any) => {
              body += chunk;
            }).on('end', () => {
                console.log('body', body);
                res.send(body);

            }).on('error', (data: any) => console.error(data));

        }

        const clientRequest = http.get(options, callback);
        clientRequest.end(0);
    }

});

 app.listen(port, () => console.log(`App running on port ${port}`));
