import { prependCardnumber } from './prependCardNumber';
import { paymentSystemCheck } from './paymentSystemCheck';
import { checkvalidity } from './checkValidity';

// eslint-disable-next-line import/prefer-default-export
export function validateIt(inputValue) {
  const vendor = paymentSystemCheck(inputValue);
  if (prependCardnumber(inputValue).length === 16 && (vendor === 'VISA' || vendor === 'MASTERCARD' || vendor === 'DISCOVER' || vendor === 'JCB') && checkvalidity(prependCardnumber(inputValue))) {
    return true;
  }
  if (prependCardnumber(inputValue).length === 14 && vendor === 'Dinners Club' && checkvalidity(prependCardnumber(inputValue))) {
    return true;
  }
  if (prependCardnumber(inputValue).length === 15 && vendor === 'JCB' && checkvalidity(prependCardnumber(inputValue))) {
    return true;
  }
  if ((prependCardnumber(inputValue).length >= 12 && prependCardnumber(inputValue).length <= 19) && vendor === 'MASTERCARD' && checkvalidity(prependCardnumber(inputValue))) {
    return true;
  }
  return false;
}
