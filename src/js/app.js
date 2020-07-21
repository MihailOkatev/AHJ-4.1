import { CardWidget } from './CardWidget';

// eslint-disable-next-line import/prefer-default-export
export const cardWidget = new CardWidget(document.querySelector('#container'));
cardWidget.bindToDOM();
cardWidget.litenersInit();
