import {
  currentlyInfected,
  infectionsByRequestedTime,
  ibrtFactor
} from './helpers';

const covid19ImpactEstimator = (data) => {
  // Destructure Data
  const {
    reportedCases,
    timeToElapse
  } = data;

  // Return Results
  return {
    data,
    impact: {
      currentlyInfected: currentlyInfected(reportedCases, 10),
      infectionsByRequestedTime: infectionsByRequestedTime(reportedCases, 10, ibrtFactor(timeToElapse))
    },
    severeImpact: {
      currentlyInfected: currentlyInfected(reportedCases, 50),
      infectionsByRequestedTime: infectionsByRequestedTime(reportedCases, 50, ibrtFactor(timeToElapse))
    }
  };
};

export default covid19ImpactEstimator;
