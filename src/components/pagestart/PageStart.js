import {PageBase} from '@core/PageBase';
import {state} from '@/core/state';

export class PageStart extends PageBase {
  constructor(root) {
    super(root);
    this.eventsPage = [
      {
        id: '#next',
        event: 'click',
        callback: state.handlerNextPage,
      },
    ];
  }
  toHTML() {
    return `
    <div class="header">
        <h1 class="header__text">${state.dataTest.name}</h1>
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
                ${state.dataTest.description}
            </div>
            <div class="panel" id="two-panel">
                ${state.dataTest.instruction}
            </div>
        </div>
        <div class="cartQuiz__nav">
            <button id="next" class="button">Начать</button>
        </div>
    </div>
    `;
  }
}
