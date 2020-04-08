// import from on-covid-19
import { PERIOD } from 'on-covid-19';

// Currently Infected Calculator
export const currentlyInfected = (cases, mul) => cases * mul;

// Infections By Requested Time Factor
export const infectionsByRequestedTimeFactor = (periodType, period) => {
  if (periodType.toLowerCase() === PERIOD.MONTHS.toLowerCase()) {
    return (period * 30) / 3;
  }

  if (periodType.toLowerCase() === PERIOD.WEEKS.toLowerCase()) {
    return (period * 7) / 3;
  }

  return period / 3;
};

// Infections By Requested Time Calculator
export const infectionsByRequestedTime = (cases, mul, fac) => {
  const result = currentlyInfected(cases, mul);
  return result * (2 ** fac);
};
