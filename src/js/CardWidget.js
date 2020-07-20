// eslint-disable-next-line import/no-cycle
import { validateIt } from './validateIt';
// eslint-disable-next-line import/no-cycle
import { tootlipDisplay } from './tooltipDisplay';

// eslint-disable-next-line import/prefer-default-export
export class CardWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
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
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    if (validateIt()) {
      inputEl.classList.add('valid');
    } else {
      inputEl.classList.add('invalid');
    }
    tootlipDisplay();
  }
}
