import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);
app.use(morgan('combined'));

//middlewares

//parse application/json
app.use(bodyParser.json({
    limit: config.bodyLimit
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

//api routes
app.use('/api', routes);
app.server.listen(config.port);
console.log(`Server started on port ${app.server.address().port}`);

export default app;