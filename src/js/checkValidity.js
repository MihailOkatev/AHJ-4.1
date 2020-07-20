// eslint-disable-next-line import/prefer-default-export
export function checkvalidity(cardNumber) {
  let sum = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cardNumber.length; i++) {
    let carddig = parseInt(cardNumber[i], 10);

    if ((cardNumber.length - i) % 2 === 0) {
      carddig *= 2;

      if (carddig > 9) {
        carddig -= 9;
      }
    }

    sum += carddig;
  }

  return sum % 10 === 0;
}
