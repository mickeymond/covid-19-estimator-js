// Currently Infected Calculator
export const currentlyInfected = (cases, mul) => cases * mul;

// Infections By Requested Time Calculator
export const infectionsByRequestedTime = (cases, mul) => currentlyInfected(cases, mul) * 1024;
