import { validateIt } from '../validateIt';

test('not digitals, must return false', () => {
  const result = validateIt('ddddj');

  expect(result).toBeFalsy();
});

test('valid number', () => {
  const result = validateIt('4048852097887814');

  expect(result).toBeTruthy();
});

test('invalid number', () => {
  const result = validateIt('4048852097887818');

  expect(result).toBeFalsy();
});
