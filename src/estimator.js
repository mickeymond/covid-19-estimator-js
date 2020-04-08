import {
  calculateCurrentlyInfected,
  calculateInfectionsByRequestedTime
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
      currentlyInfected: calculateCurrentlyInfected(reportedCases, 10),
      infectedByRequestedTime: calculateInfectionsByRequestedTime(reportedCases, 10)
    },
    severeImpact: {
      currentlyInfected: calculateCurrentlyInfected(reportedCases, 50),
      infectedByRequestedTime: calculateInfectionsByRequestedTime(reportedCases, 50)
    }
  };
};

export default covid19ImpactEstimator;
