import { CardWidget } from '../CardWidget';

test('should validate input, valid number', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const widget = new CardWidget(container);
  widget.bindToDOM();
  const input = container.querySelector(CardWidget.inputSelector);
  input.value = '4627342100289991';
  const submit = container.querySelector(CardWidget.submitSelector);
  submit.click();
  expect(input.classList.contains('valid')).toBeTruthy();
});

test('should validate input, invalid number', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const widget = new CardWidget(container);
  widget.bindToDOM();
  const input = container.querySelector(CardWidget.inputSelector);
  input.value = '4627342100289994';
  const submit = container.querySelector(CardWidget.submitSelector);
  submit.click();
  expect(input.classList.contains('valid')).toBeFalsy();
});
