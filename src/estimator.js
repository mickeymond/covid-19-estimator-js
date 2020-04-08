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
      infectedByRequestedTime: infectionsByRequestedTime(reportedCases, 10)
    },
    severeImpact: {
      currentlyInfected: calculateCurrentlyInfected(reportedCases, 50),
      infectedByRequestedTime: calculateInfectionsByRequestedTime(reportedCases, 50)
    }
  };
};

export default covid19ImpactEstimator;
