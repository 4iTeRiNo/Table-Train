export function isNumber(value: number): boolean {
  if (!isNaN(value) && !Number.isInteger(value)) {
    return false;
  } else {
    return true;
  }
}

export function isPositiveNumber(value: number): boolean {
  if (!isNaN(value) && Number.isInteger(value) && value > 0) {
    return true;
  } else {
    return false;
  }
}

export function isFloatingPointNumber(value: number): boolean {
  if (!isNaN(value) && !Number.isInteger(value)) {
    return true;
  } else {
    return false;
  }
}
