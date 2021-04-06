import {PageBase} from '@core/PageBase';

export class PageStart extends PageBase {
  constructor(...arg) {
    super(...arg);
    this.namePage='PageStart';
  }

  toHTML() {
    return `
    <div class="header">
        <h1 class="header__text">${this.name}</h1>
    </div>
    <div class="cartQuiz">
        <input class="radio" id="one" name="group" type="radio" checked>
        <input class="radio" id="two" name="group" type="radio">
        <div class="tabs">
            <label class="tab" id="one-tab" for="one">Описание</label>
            <label class="tab" id="two-tab" for="two">Правила</label>
        </div>
        <div class="panels">
            <div class="panel" id="one-panel">
                ${this.description}
            </div>
            <div class="panel" id="two-panel">
                ${this.instruction}
            </div>
        </div>
        <div class="cartQuiz__nav">
            <button id="start" class="button">Начать</button>
        </div>
    </div>
    `;
  }
}
