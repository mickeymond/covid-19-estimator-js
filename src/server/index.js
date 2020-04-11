// import dependencies
import { createWriteStream } from 'fs';
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';

import routes from './routes';

// declare and define constants
const PORT = process.env.PORT || 4000;

// initialize an express app
const app = express();

// enable http parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// morgan logs setup
// create a write stream (in append mode)
const accessLogStream = createWriteStream(join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan(':method  :url  :status  :response-time ms', { stream: accessLogStream }));

// counfigure app to use router
app.use('/api/v1', routes);

// listen for incomming requests
app.listen(PORT, () => {
  console.log(`application listening on port ${PORT}`);
});