// eslint-disable-next-line import/prefer-default-export
export function paymentSystemCheck(inputValue) {
  let cardVendor;
  const value = Array.from(inputValue);
  switch (value[0]) {
    case '2':
      cardVendor = 'MIR';
      break;
    case '4':
      cardVendor = 'VISA';
      break;
    case '5':
      cardVendor = 'MASTERCARD';
      break;
    case '3':
      if (value[1] === '0' || value[1] === '6' || value[1] === '8') {
        cardVendor = 'Dinners Club';
      }
      if (value[1] === '1' || value[1] === '5') {
        cardVendor = 'JCB';
      }
      if (value[1] === '4' || value[1] === '7') {
        cardVendor = 'AmEx';
      }
      break;
    case '6':
      if (value[1] === '0') {
        cardVendor = 'DISCOVER';
      } else if (value[1] === '3' || value[1] === '7') {
        cardVendor = 'MASTERCARD';
      } else if (value[1] === '2') {
        cardVendor = 'CHINAUNIONPAY';
      }
      break;
    default:
      cardVendor = null;
      break;
  }
  return cardVendor;
}
