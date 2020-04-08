import { whatIs } from 'on-covid-19';
import {
  currentlyInfected as _CI,
  infectionsByRequestedTime as _IBRT,
  infectionsByRequestedTimeFactor as _IBRTF
} from './helpers';

const covid19ImpactEstimator = (data) => {
  // Destructure Data
  const {
    reportedCases,
    periodType,
    timeToElapse,
    totalHospitalBeds
  } = data;

  // Calculate Infections By Requested Time Factor
  const ibrtFactor = _IBRTF(periodType, timeToElapse);

  // Return Results
  return {
    data,
    impact: {
      currentlyInfected: _CI(reportedCases, 10),
      infectionsByRequestedTime: _IBRT(reportedCases, 10, ibrtFactor),
      severeCasesByRequestedTime: whatIs('15%').of(_IBRT(reportedCases, 10, ibrtFactor)),
      hospitalBedsByRequestedTime: whatIs('35%').of(totalHospitalBeds)
    },
    severeImpact: {
      currentlyInfected: _CI(reportedCases, 50),
      infectionsByRequestedTime: _IBRT(reportedCases, 50, ibrtFactor),
      severeCasesByRequestedTime: whatIs('15%').of(_IBRT(reportedCases, 50, ibrtFactor)),
      hospitalBedsByRequestedTime: whatIs('35%').of(totalHospitalBeds)
    }
  };
};

export default covid19ImpactEstimator;
