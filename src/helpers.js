// Currently Infected Calculator
export const calculateCurrentlyInfected = (reportedCases, multiplier) => reportedCases * multiplier;

// Infections By Requested Time Calculator
export const calculateInfectionsByRequestedTime = (reportedCases, multiplier) =>
  calculateCurrentlyInfected(reportedCases, multiplier) * 1024;
