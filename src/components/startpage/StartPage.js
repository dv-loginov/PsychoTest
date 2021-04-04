export class StartPage {
  constructor(...arg) {
    this.name = arg[0].name;
    this.description = arg[0].description;
    this.instruction = arg[0].instruction;
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
