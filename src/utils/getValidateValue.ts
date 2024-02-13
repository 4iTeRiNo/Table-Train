import { Characteristic } from '../types';

const isNumber = (value: number): boolean => {
  if (!isNaN(value) && Number.isInteger(value)) {
    return true;
  } else {
    return false;
  }
};

const isPositiveNumber = (value: number): boolean => {
  if (!isNaN(value) && Number.isInteger(value) && value > 0) {
    return true;
  } else {
    return false;
  }
};

const isFloatingPointNumber = (value: number): boolean => {
  if (!isNaN(value) && !Number.isInteger(value) && typeof value === 'number') {
    return true;
  } else {
    return false;
  }
};

const validateRules = {
  speed: [isNumber],
  force: [isFloatingPointNumber],
  engineAmperage: [isPositiveNumber],
};

export const validate = (key: Characteristic, value: number): boolean => {
  const validateFunctions = validateRules[key];
  if (validateFunctions) {
    return validateFunctions.every((validateFunc) => validateFunc(value));
  }
  return false;
};
