import { double, power } from './number';

describe('double', () => {
  it('should return 15 for add(10,5)', () => {
    expect(double(5)).toBe(10);
  });
  it('should return 5 for add(2,3)', () => {
    expect(power(2, 3)).toBe(8);
  });
});

// test('should return 15 for add(10,5)', () => {
//   expect(double(5)).toBe(10);
// });
// test('should return 5 for add(2,3)', () => {
//   expect(power(2, 3)).toBe(8);
// });
