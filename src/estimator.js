import { whatIs } from 'on-covid-19';
import {
  currentlyInfected as _CI,
  infectionsByRequestedTime as _IBRT,
  convertToDays as _CTD
} from './helpers';

const covid19ImpactEstimator = (data) => {
  // Destructure Data
  const {
    reportedCases,
    periodType,
    timeToElapse,
    totalHospitalBeds,
    region: { avgDailyIncomePopulation, avgDailyIncomeInUSD }
  } = data;

  // Calculate Days
  const days = _CTD(periodType, timeToElapse);

  // Calculate Infections By Requested Time Factor
  const daysFactor = Math.trunc(days / 3);

  // Calculate Dollars In Flight Factor
  const incomeFactor = avgDailyIncomePopulation * avgDailyIncomeInUSD;

  // 35% of Total Hospital Beds
  const xbeds = whatIs('35%').of(totalHospitalBeds);

  // Return Results
  return {
    data,
    impact: {
      currentlyInfected: _CI(reportedCases, 10),
      infectionsByRequestedTime: _IBRT(reportedCases, 10, daysFactor),
      severeCasesByRequestedTime: Math.trunc(whatIs('15%').of(_IBRT(reportedCases, 10, daysFactor))),
      hospitalBedsByRequestedTime: Math.trunc(xbeds - whatIs('15%').of(_IBRT(reportedCases, 10, daysFactor))),
      casesForICUByRequestedTime: Math.trunc(whatIs('5%').of(_IBRT(reportedCases, 10, daysFactor))),
      casesForVentilatorsByRequestedTime: Math.trunc(whatIs('2%').of(_IBRT(reportedCases, 10, daysFactor))),
      dollarsInFlight: Math.trunc((_IBRT(reportedCases, 10, daysFactor) * incomeFactor) / days)
    },
    severeImpact: {
      currentlyInfected: _CI(reportedCases, 50),
      infectionsByRequestedTime: _IBRT(reportedCases, 50, daysFactor),
      severeCasesByRequestedTime: Math.trunc(whatIs('15%').of(_IBRT(reportedCases, 50, daysFactor))),
      hospitalBedsByRequestedTime: Math.trunc(xbeds - whatIs('15%').of(_IBRT(reportedCases, 50, daysFactor))),
      casesForICUByRequestedTime: Math.trunc(whatIs('5%').of(_IBRT(reportedCases, 50, daysFactor))),
      casesForVentilatorsByRequestedTime: Math.trunc(whatIs('2%').of(_IBRT(reportedCases, 50, daysFactor))),
      dollarsInFlight: Math.trunc((_IBRT(reportedCases, 50, daysFactor) * incomeFactor) / days)
    }
  };
};

export default covid19ImpactEstimator;
