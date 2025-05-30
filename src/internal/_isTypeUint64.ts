export const _isTypeUint64 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = 0;
const MAXIMUM = 2 ** 64 - 1;
