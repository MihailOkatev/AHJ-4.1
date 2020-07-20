// eslint-disable-next-line import/no-cycle
import { CardWidget } from './CardWidget';

// eslint-disable-next-line import/prefer-default-export
export function tootlipDisplay() {
  const tooltip = document.createElement('span');
  tooltip.classList.add('tooltip');
  if (document.querySelector(CardWidget.inputSelector).classList.contains('valid')) {
    tooltip.textContent = 'Вы ввели корректный номер карты';
    tooltip.classList.add('tooltip__valid');
  } else {
    tooltip.textContent = 'Вы ввели некорректный номер карты';
    tooltip.classList.add('tooltip__invalid');
  }
  document.getElementById('container').append(tooltip);
}
