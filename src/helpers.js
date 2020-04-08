// Currently Infected Calculator
export const currentlyInfected = (cases, mul) => cases * mul;

// Infections By Requested Time Factor
export const ibrtFactor = days => days / 3;

// Infections By Requested Time Calculator
export const infectionsByRequestedTime = (cases, mul, fac) => currentlyInfected(cases, mul) * 2 ** fac;
