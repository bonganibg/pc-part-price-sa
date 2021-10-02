const http = require('http');
const app = require('./api/app');

const server = http.createServer(app);

const port = (process.env.port || 3000);
app.set("port". port);
server.listen(port);