// import from on-covid-19
import { PERIOD } from 'on-covid-19';

// Currently Infected Calculator
export const currentlyInfected = (cases, mul) => cases * mul;

// Infections By Requested Time Factor
export const infectionsByRequestedTimeFactor = (periodType, period) => {
  let factor;

  switch (periodType.toUpperCase()) {
    case PERIOD.MONTHS:
      factor = (period * 30) / 3;
      break;
    case PERIOD.WEEKS:
      factor = (period * 7) / 3;
      break;
    default:
      factor = period / 3;
      break;
  }

  return factor;
};

// Infections By Requested Time Calculator
export const infectionsByRequestedTime = (cases, mul, fac) => {
  const result = currentlyInfected(cases, mul);
  return result * (2 ** fac);
};
