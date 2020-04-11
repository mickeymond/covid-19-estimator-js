// import dependencies
import xml2js from 'xml2js';
import { validationResult } from 'express-validator';
import { createReadStream } from 'fs';
import { join } from 'path';

import covid19ImpactEstimator from '../estimator';

export const estimateCovid19Impact = (req, res) => {
  // handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { format } = req.params;

  const result = covid19ImpactEstimator(req.body);

  if (format && format === 'xml') {
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(result);

    res.type('application/xml');
    return res.send(xml);
  }

  return res.json(result);
};

export const accessLogs = (req, res) => {
  res.type('text/plain');
  return createReadStream(join(__dirname, 'access.log')).pipe(res);
};
