import { CardWidget } from './CardWidget';
import { listeners } from './listeners';

export const submit = document.querySelector('[data-id=cardNumber-submit]');
export const cardWidget = new CardWidget(document.querySelector('#container'));
cardWidget.bindToDOM();
listeners();
