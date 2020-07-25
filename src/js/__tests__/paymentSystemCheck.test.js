import { paymentSystemCheck } from '../paymentSystemCheck';

test('not digitals, must return null', () => {
  const result = paymentSystemCheck('fkfkfkf');

  expect(result).toBeNull();
});

test('visa card number, must return VISA', () => {
  const result = paymentSystemCheck('4048852097887814');

  expect(result).toBe('VISA');
});

test('mastercard card number, must return MASTERCARD', () => {
  const result = paymentSystemCheck('5124016772076382');

  expect(result).toBe('MASTERCARD');
});

test('unknown system card number, must return null', () => {
  const result = paymentSystemCheck('1124016772076382');

  expect(result).toBeNull();
});
