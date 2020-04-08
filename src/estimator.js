import {
  currentlyInfected,
  infectionsByRequestedTime,
  infectionsByRequestedTimeFactor
} from './helpers';

const covid19ImpactEstimator = (data) => {
  // Destructure Data
  const {
    reportedCases,
    periodType,
    timeToElapse
  } = data;

  // Calculate Infections By Requested Time Factor
  const ibrtFactor = infectionsByRequestedTimeFactor(periodType, timeToElapse);

  // Return Results
  return {
    data,
    impact: {
      currentlyInfected: currentlyInfected(reportedCases, 10),
      infectionsByRequestedTime: infectionsByRequestedTime(reportedCases, 10, ibrtFactor)
    },
    severeImpact: {
      currentlyInfected: currentlyInfected(reportedCases, 50),
      infectionsByRequestedTime: infectionsByRequestedTime(reportedCases, 50, ibrtFactor)
    }
  };
};

export default covid19ImpactEstimator;
