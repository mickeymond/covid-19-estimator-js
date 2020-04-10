// Helper Functions

// Currently Infected Calculator
export const currentlyInfected = (cases, mul) => cases * mul;

// Convert To Days
export const convertToDays = (periodType, period) => {
  let days = period;

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
