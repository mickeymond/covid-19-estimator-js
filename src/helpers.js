// Helper Functions

// Currently Infected Calculator
export const currentlyInfected = (cases, mul) => cases * mul;

// Infections By Requested Time Factor
export const infectionsByRequestedTimeFactor = (periodType, period) => {
  let factor = 0;

  if (periodType.toLowerCase() === 'days' || periodType.toLowerCase() === 'day') {
    factor = period / 3;
  }

  if (periodType.toLowerCase() === 'weeks' || periodType.toLowerCase() === 'week') {
    factor = (period * 7) / 3;
  }

  if (periodType.toLowerCase() === 'months' || periodType.toLowerCase() === 'month') {
    factor = (period * 30) / 3;
  }

  return factor;
};

// Convert To Days
export const convertToDays = (periodType, period) => {
  let days = 0;

  if (periodType.toLowerCase() === 'days' || periodType.toLowerCase() === 'day') {
    days = period;
  }

  if (periodType.toLowerCase() === 'weeks' || periodType.toLowerCase() === 'week') {
    days = period * 7;
  }

  if (periodType.toLowerCase() === 'months' || periodType.toLowerCase() === 'month') {
    days = period * 30;
  }

  return days;
};

// Infections By Requested Time Calculator
export const infectionsByRequestedTime = (cases, mul, fac) => {
  const result = currentlyInfected(cases, mul);
  return result * (2 ** fac);
};
