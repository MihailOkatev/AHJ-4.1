import { prependCardnumber } from './prependCardNumber';
// eslint-disable-next-line import/no-cycle
import { paymentSystemCheck } from './paymentSystemCheck';
import { checkvalidity } from './checkValidity';
// eslint-disable-next-line import/no-cycle
import { CardWidget } from './CardWidget';

// eslint-disable-next-line consistent-return,import/prefer-default-export
export function validateIt() {
  const inputValue = document.querySelector(CardWidget.inputSelector).value;
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
  if ((prependCardnumber(inputValue).length >= 12 && prependCardnumber().length <= 19) && vendor === 'MASTERCARD' && checkvalidity(prependCardnumber(inputValue))) {
    return true;
  }
}
