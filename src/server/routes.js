// import dependecies
import { Router } from 'express';

import { validateEstimatorInput } from './validator';
import { estimateCovid19Impact, accessLogs } from './controller';

// initialize router
const router = Router();

// POST /api/v1/on-covid-19
router.post('/on-covid-19/:format?', validateEstimatorInput, estimateCovid19Impact);

// ALL /api/v1/on-covid-19/logs
router.use('/on-covid-19/logs', accessLogs)

// export router
export default router;