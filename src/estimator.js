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
    region: { avgDailyIncomeInUSD }
  } = data;

  // Calculate Infections By Requested Time Factor
  const ibrtFactor = Math.trunc(_CTD(periodType, timeToElapse) / 3);

  // Calculate Dollars In Flight Factor
  const difFactor = avgDailyIncomeInUSD * _CTD(periodType, timeToElapse);

  // 35% of Total Hospital Beds
  const xbeds = whatIs('35%').of(totalHospitalBeds);

  // Return Results
  return {
    data,
    impact: {
      currentlyInfected: _CI(reportedCases, 10),
      infectionsByRequestedTime: _IBRT(reportedCases, 10, ibrtFactor),
      severeCasesByRequestedTime: Math.trunc(whatIs('15%').of(_IBRT(reportedCases, 10, ibrtFactor))),
      hospitalBedsByRequestedTime: Math.trunc(xbeds - whatIs('15%').of(_IBRT(reportedCases, 10, ibrtFactor))),
      casesForICUByRequestedTime: Math.trunc(whatIs('5%').of(_IBRT(reportedCases, 10, ibrtFactor))),
      casesForVentilatorsByRequestedTime: Math.trunc(whatIs('2%').of(_IBRT(reportedCases, 10, ibrtFactor))),
      dollarsInFlight: Math.trunc(_IBRT(reportedCases, 10, ibrtFactor) * difFactor)
    },
    severeImpact: {
      currentlyInfected: _CI(reportedCases, 50),
      infectionsByRequestedTime: _IBRT(reportedCases, 50, ibrtFactor),
      severeCasesByRequestedTime: Math.trunc(whatIs('15%').of(_IBRT(reportedCases, 50, ibrtFactor))),
      hospitalBedsByRequestedTime: Math.trunc(xbeds - whatIs('15%').of(_IBRT(reportedCases, 50, ibrtFactor))),
      casesForICUByRequestedTime: Math.trunc(whatIs('5%').of(_IBRT(reportedCases, 50, ibrtFactor))),
      casesForVentilatorsByRequestedTime: Math.trunc(whatIs('2%').of(_IBRT(reportedCases, 50, ibrtFactor))),
      dollarsInFlight: Math.trunc(_IBRT(reportedCases, 50, ibrtFactor) * difFactor)
    }
  };
};

export default covid19ImpactEstimator;
