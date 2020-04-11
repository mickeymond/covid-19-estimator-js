// import dependencies
import { createWriteStream } from 'fs';
import { join } from 'path';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import winston from 'winston';

import routes from './routes';

// declare and define constants
const PORT = process.env.PORT || 4000;

// configure winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() })
  ]
});

// initialize an express app
const app = express();

// enable http parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// morgan logs setup
// create a write stream (in append mode)
const accessLogStream = createWriteStream(join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan(':method\t\t:url\t\t:status\t\t:response-time ms', { stream: accessLogStream }));

// configure middlewares
app.use(cors());

// counfigure app to use router
app.use('/api/v1', routes);

// listen for incomming requests
app.listen(PORT, () => logger.info(`application listening on port ${PORT}`));
