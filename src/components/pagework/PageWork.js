import {PageBase} from '@core/PageBase';
import {state} from '@core/state';

export class PageWork extends PageBase {
  constructor(root) {
    super(root);
    this.questions = state.dataTest.questions;
    this.currentQuestionIndex = 86;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.isEndQuestion = () =>
      (this.currentQuestionIndex === this.questions.length - 1);
    this.eventsPage = [
      {
        id: '#next',
        event: 'click',
        callback: this.handleNextQuestion.bind(this),
      },
      {
        id: '.cartQuiz__answer',
        event: 'click',
        callback: this.handleAnswer.bind(this),
      },
    ];
    this.dataResult = [];
    // console.log(`
    //   Вопрос №${this.currentQuestionIndex + 1} из ${this.questions.length}
    // `);
    // console.log(`isEnd: ${this.isEndQuestion()}`);
  }
  buttonEnable() {
    this.buttonNext = document.querySelector('#next');
    this.buttonNext.removeAttribute('disabled');
  }
  removeEventOnAnswer() {
    this.eventsPage = [
      {
        id: '.cartQuiz__answer',
        event: 'click',
        callback: this.handleAnswer.bind(this),
      },
    ];
    this.offEvents();
  }
  changeEventOnButton() {
    this.eventsPage = [
      {
        id: '#next',
        event: 'click',
        callback: state.handlerNextPage,
      },
    ];
    this.onEvents();
  }
  handleAnswer(e) {
    if (e.target.type === 'radio') {
      this.dataResult[this.currentQuestion.id-1] = e.target.value;
      this.buttonEnable();
      if (this.isEndQuestion()) {
        this.removeEventOnAnswer();
        this.changeEventOnButton();
        state.dataResult = this.dataResult;
        // console.dir(state.dataResult);
        // state.dataResult.map((answer, index) => console.log(index));
      }
    }
  }
  handleNextQuestion() {
    console.log('handleNextQuestion');
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.$root.clear();
      this.render();
    }
    // console.log(`
    //   Вопрос №${this.currentQuestionIndex + 1} из ${this.questions.length}
    // `);
    // console.log(`isEnd: ${this.isEndQuestion()}`);
  }
  toHTML() {
    return `
    <div class="header">
        <h1 class="header__text">${state.dataTest.name}</h1>
    </div>
    <div class="cartQuiz">
     <div class="cartQuiz__question">
              <span class="cartQuiz__info">Вопрос
                  ${this.currentQuestionIndex + 1} 
                  из 
                  ${this.questions.length}
              </span>
              <h2>${this.currentQuestion.question}</h2>
          </div>
          <div class="cartQuiz__answer">
            <input 
                type="radio" 
                id="radio__answer-yes" 
                class="radio__answer" 
                name="answer" 
                value="yes">
            <label for="radio__answer-yes">Да</label><br>
            <input 
                type="radio" 
                id="radio__answer-no" 
                class="radio__answer" 
                name="answer" 
                value="no">
            <label for="radio__answer-no">Нет</label><br>
          </div>
          <div class="cartQuiz__nav">
              <button 
                id="next" 
                class="button" 
                disabled
                >Далее</button>
          </div>
    </div>
    `;
  }
}
