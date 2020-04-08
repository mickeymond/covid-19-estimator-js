import {
  currentlyInfected,
  infectionsByRequestedTime
} from './helpers';

const covid19ImpactEstimator = (data) => {
  // Destructure Data
  const {
    reportedCases
  } = data;

  // Return Results
  return {
    data,
    impact: {
      currentlyInfected: currentlyInfected(reportedCases, 10),
      infectionsByRequestedTime: infectionsByRequestedTime(reportedCases, 10)
    },
    severeImpact: {
      currentlyInfected: currentlyInfected(reportedCases, 50),
      infectionsByRequestedTime: infectionsByRequestedTime(reportedCases, 50)
    }
  };
};

export default covid19ImpactEstimator;
