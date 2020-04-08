// Currently Infected Calculator
export const currentlyInfected = (cases, mul) => cases * mul;

// Infections By Requested Time Factor
export const infectionsByRequestedTimeFactor = (periodType, period) => {
  if (periodType === 'days') {
    return period / 3;
  }

  if (periodType === 'weeks') {
    return (period * 7) / 3;
  }

  return (period * 7 * 4) / 3;
};

// Infections By Requested Time Calculator
export const infectionsByRequestedTime = (cases, mul, fac) => {
  const result = currentlyInfected(cases, mul);
  return result * 2 ** fac;
};
