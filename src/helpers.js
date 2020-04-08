// Currently Infected Calculator
export const currentlyInfected = (cases, mul) => cases * mul;

// Infections By Requested Time Factor
export const infectionsByRequestedTimeFactor = (periodType, period) => {
  if (periodType === 'days') {
    return period / 3;
  } else if (periodType === 'weeks') {
    return period * 7 / 3
  } else {
    return period * 7 * 4 / 3
  }
};

// Infections By Requested Time Calculator
export const infectionsByRequestedTime = (cases, mul, fac) => currentlyInfected(cases, mul) * 2 ** fac;
