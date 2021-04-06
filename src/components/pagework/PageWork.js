import {PageBase} from '@core/PageBase';

export class PageWork extends PageBase {
  constructor(...arg) {
    super(...arg);
    this.namePage='PageWork';
  }

  toHTML() {
    return `
    <div class="header">
        <h1 class="header__text">${this.name}</h1>
    </div>
    <div class="cartQuiz">
        <div class="cartQuiz__question">
            <span class="cartQuiz__info">Вопрос 1 из 100</span>
            <h2>Вопрос</h2>
        </div>
        <div class="cartQuiz__answer">
            <h3>Ответ</h3>
        </div>
        <div class="cartQuiz__nav">
            <button id="next" class="button">Далее</button>
        </div>
    </div>
    `;
  }
}
