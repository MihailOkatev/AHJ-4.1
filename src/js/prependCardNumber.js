// eslint-disable-next-line import/prefer-default-export
export function prependCardnumber(inputValue) {
  const value = Array.from(inputValue);
  value.forEach((item, index) => {
    if (item.search(/\D/) !== -1) {
      value.splice(index, 1);
    }
  });
  return value;
}
