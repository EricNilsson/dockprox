import Express from 'express';
import path from 'path';

const app = Express();
const port = 3800;

app.use((req, res) => {
    const requestPath = path.parse(req.path);
    console.log('requestPath', requestPath);
    console.log('req.path', req.path);
    res.send('hej');
});

 app.listen(port, () => console.log(`App running on port ${port}`));
