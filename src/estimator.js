import { whatIs } from 'on-covid-19';
import {
  currentlyInfected as _CI,
  infectionsByRequestedTime as _IBRT,
  infectionsByRequestedTimeFactor as _IBRTF,
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
  const ibrtFactor = _IBRTF(periodType, timeToElapse);

  // Calculate Dollars In Flight Factor
  const difFactor = avgDailyIncomeInUSD * _CTD(periodType, timeToElapse);

  // Return Results
  return {
    data,
    impact: {
      currentlyInfected: _CI(reportedCases, 10),
      infectionsByRequestedTime: _IBRT(reportedCases, 10, ibrtFactor),
      severeCasesByRequestedTime: whatIs('15%').of(_IBRT(reportedCases, 10, ibrtFactor)),
      hospitalBedsByRequestedTime: whatIs('35%').of(totalHospitalBeds),
      casesForICUByRequestedTime: whatIs('5%').of(_IBRT(reportedCases, 10, ibrtFactor)),
      casesForVentilatorsByRequestedTime: whatIs('2%').of(_IBRT(reportedCases, 10, ibrtFactor)),
      dollarsInFlight: _IBRT(reportedCases, 10, ibrtFactor) * difFactor
    },
    severeImpact: {
      currentlyInfected: _CI(reportedCases, 50),
      infectionsByRequestedTime: _IBRT(reportedCases, 50, ibrtFactor),
      severeCasesByRequestedTime: whatIs('15%').of(_IBRT(reportedCases, 50, ibrtFactor)),
      hospitalBedsByRequestedTime: whatIs('35%').of(totalHospitalBeds),
      casesForICUByRequestedTime: whatIs('5%').of(_IBRT(reportedCases, 50, ibrtFactor)),
      casesForVentilatorsByRequestedTime: whatIs('2%').of(_IBRT(reportedCases, 50, ibrtFactor)),
      dollarsInFlight: _IBRT(reportedCases, 50, ibrtFactor) * difFactor
    }
  };
};

export default covid19ImpactEstimator;
