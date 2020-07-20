import { paymentSystemCheck } from './paymentSystemCheck';
import { prependCardnumber } from './prependCardNumber';
import { CardWidget } from './CardWidget';

// eslint-disable-next-line import/prefer-default-export
export function cardVendorDisplay() {
  const inputValue = document.querySelector(CardWidget.inputSelector).value;
  const vendor = paymentSystemCheck(document.querySelector(CardWidget.inputSelector).value);
  document.querySelectorAll('.card-variants__item')
    .forEach((item) => {
      if (!item.classList.contains('grayscale')) {
        item.classList.add('grayscale');
      }
    });
  if (prependCardnumber(inputValue).length > 0) {
    // eslint-disable-next-line default-case
    switch (vendor) {
      case 'MIR':
        document.querySelector('.mir-card')
          .classList
          .remove('grayscale');
        break;
      case 'VISA':
        document.querySelector('.visa-card')
          .classList
          .remove('grayscale');
        break;
      case 'MASTERCARD':
        document.querySelector('.mastercard-card')
          .classList
          .remove('grayscale');
        break;
      case 'AmEx':
        document.querySelector('.american-express-card')
          .classList
          .remove('grayscale');
        break;
      case 'JCB':
        document.querySelector('.jcb-card')
          .classList
          .remove('grayscale');
        break;
      case 'Dinners Club':
        document.querySelector('.dinners-club-card')
          .classList
          .remove('grayscale');
        break;
      case 'DISCOVER':
        document.querySelector('.discover-card')
          .classList
          .remove('grayscale');
        break;
    }
  }
}
