import {PageBase} from '@core/PageBase';
import {state} from '@core/state';

export class PageEnd extends PageBase {
  constructor(root) {
    super(root);
    this.eventsPage = [];
    this.answer = state.dataTest.answer;
    this.keys = state.dataTest.keys;
    this.limit = state.dataTest.limit;
    this.legend = state.dataTest.legend;
    this.resultCalculated = [];
    // this.getDemoResult(1);
    // console.dir(state.dataTest);
    this.calculation();
    this.buildResult = this.buildResultHtml();
  }
  buildResultHtml() {
    let html='';
    this.resultCalculated.map( (result, index) => {
      if (result >= this.limit) {
        html+=`
        <h3>${this.legend[index].type}</h3>
        <br>
        <p>${this.legend[index].description}</p>
        <br>
        `;
      }
    });
    return html;
  }

  // getDemoResult(aggregate = 0) {
  //   const light = state.dataTest.questions.length;
  //   // console.log(light);
  //   this.answer = new Array(light);
  //   this.answer.fill(aggregate, 0, light);
  // }

  calculation() {
    this.keys.map(key => {
      let sumNegative = 0;
      let sumPositive = 0;
      key.positive.map(numberQuestion => {
        if (this.answer[numberQuestion-1] === 1) sumPositive++;
      });
      key.negative.map(numberQuestion => {
        if (this.answer[numberQuestion-1] === 0) sumNegative++;
      });
      this.resultCalculated.push((sumPositive + sumNegative) * key.multiplier);
    });
    console.dir(this.resultCalculated);
  }

  toHTML() {
    return `
     <div class="header">
        <h1 class="header__text">Тест - опросник Г. Шмишека, К.
            Леонгарда. Методика Акцентуации
            характера и темперамента личности.</h1>
    </div>
    <div class="cartQuiz">
        <div class="result__title">Расшифровка результата</div>
        <div class="result__text">
            ${this.buildResult}
        </div>
        <div class="cartQuiz__nav">
            <button id="next" class="button">Закончить</button>
        </div>
    </div>
    `;
  }
}
