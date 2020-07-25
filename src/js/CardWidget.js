import { validateIt } from './validateIt';
import { cardVendorDisplay } from './cardVendorDisplay';
import { paymentSystemCheck } from './paymentSystemCheck';

// eslint-disable-next-line import/prefer-default-export
export class CardWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.inputEl = document.querySelector(this.constructor.inputSelector);
  }

  static get markup() {
    return `<form data-widget="cardNumber-form-widget">
    <div class="form-control">
        <label for="cardNumber-input">Введите номер пластиковой карты</label>
         <ul class="cards-variants">
        <li class="card-variants__item visa-card grayscale"><span class="visability-hidden">Visa</span></li>
        <li class="card-variants__item mastercard-card grayscale"><span class="visability-hidden">Mastercard</span></li>
        <li class="card-variants__item mir-card grayscale"><span class="visability-hidden">МИР</span></li>
        <li class="card-variants__item american-express-card grayscale"><span class="visability-hidden">American Express</span></li>
        <li class="card-variants__item discover-card grayscale"><span class="visability-hidden">Discover</span></li>
        <li class="card-variants__item dinners-club-card grayscale"><span class="visability-hidden">Diners Club</span></li>
        <li class="card-variants__item jcb-card grayscale"><span class="visability-hidden">JCB</span></li>
    </ul>
          <div class="wrapper">
          <input id="cardNumber-input" data-id="cardNumber-input" type="text" placeholder="Номер карты">
          <button data-id="cardNumber-submit">Проверить данные</button>
       </div>
     </div>

  </form>
 `;
  }

  static get inputSelector() {
    return '[data-id=cardNumber-input]';
  }


  static get submitSelector() {
    return '[data-id=cardNumber-submit]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = document.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (evt) => {
      this.onSubmit(evt);
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    if (validateIt((document.querySelector(this.constructor.inputSelector).value))) {
      document.querySelector(this.constructor.inputSelector).classList.add('valid');
    } else {
      document.querySelector(this.constructor.inputSelector).classList.add('invalid');
    }
    this.tooltipDisplay();
  }

  litenersInit() {
    document.querySelector(this.constructor.inputSelector).addEventListener('keypress', (evt) => {
      // eslint-disable-next-line max-len
      if (!((evt.charCode > 47 && evt.charCode < 58) || (evt.charCode < 96 && evt.charCode > 105) || evt.charCode === 32 || evt.charCode === 189 || evt.charCode === 45)) {
        evt.preventDefault();
      }
      if ((evt.charCode === 32 || evt.charCode === 189 || evt.charCode === 45) && document.querySelector(this.constructor.inputSelector).value === '') {
        evt.preventDefault();
      }
    });
    document.querySelector(this.constructor.inputSelector).addEventListener('input', () => {
      // eslint-disable-next-line max-len
      cardVendorDisplay(paymentSystemCheck(document.querySelector(this.constructor.inputSelector).value));
    });
    document.querySelector(this.constructor.inputSelector).addEventListener('paste', () => {
      // eslint-disable-next-line max-len
      cardVendorDisplay(paymentSystemCheck(document.querySelector(this.constructor.inputSelector).value));
    });
  }

  tooltipDisplay() {
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    if (document.querySelector(this.constructor.inputSelector).classList.contains('valid')) {
      tooltip.textContent = 'Вы ввели корректный номер карты';
      tooltip.classList.add('tooltip__valid');
    } else {
      tooltip.textContent = 'Вы ввели некорректный номер карты';
      tooltip.classList.add('tooltip__invalid');
    }
    this.parentEl.append(tooltip);
  }
}
