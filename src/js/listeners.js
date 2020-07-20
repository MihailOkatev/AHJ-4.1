import { cardVendorDisplay } from './cardVendorDisplay';


// eslint-disable-next-line import/prefer-default-export
export function listeners() {
  const input = document.querySelector('#cardNumber-input');
  input.addEventListener('input', (evt) => {
    cardVendorDisplay(evt);
  });
}
