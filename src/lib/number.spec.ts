import { double, power } from './number';

describe('double', () => {
  it('should return 10 for double(5)', () => {
    expect(double(5)).toBe(10);
  });
});

describe('power', () => {
  it('should return 4 for power(2,2)', () => {
    expect(power(2, 2)).toBe(4);
  });
});
