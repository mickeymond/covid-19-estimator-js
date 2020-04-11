// import dependecies
import { checkSchema } from 'express-validator';

// validate estimator input
export const validateEstimatorInput = checkSchema({
  'region.name': {
    isString: true
  },
  'region.avgAge': {
    isNumeric: true
  },
  'region.avgDailyIncomeInUSD': {
    isNumeric: true
  },
  'region.avgDailyIncomePopulation': {
    isNumeric: true
  },
  periodType: {
    isString: true,
    isIn: {
      options: [['days', 'weeks', 'months']],
      errorMessage: 'periodType must be one of days, weeks, months'
    },
    errorMessage: 'periodType must be a string'
  },
  timeToElapse: {
    isNumeric: true
  },
  reportedCases: {
    isInt: true
  },
  population: {
    isInt: true
  },
  totalHospitalBeds: {
    isInt: true
  }
});

export const validate = [];
