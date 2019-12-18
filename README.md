# WIP!


## TODO:
- Bind doker docket to container
- Let webserver catch all requests
- Foward the request path to docker socket
- Sanitize the reaponse before it is sent back
- Create filter ruleset for the response. E.g. Filter out (replace with ****) any value for the key "API_TOKEN". This is to minimize the risk of leaking keys that are set as an enviroment variable.

