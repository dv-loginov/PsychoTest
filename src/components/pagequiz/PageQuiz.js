import {$} from '@core/dom';

export class PageQuiz {
  constructor(rootQuiz, questions, nextPage) {
    this.namePage = 'PageQuiz';
    this.questions = questions;
    this.$root = $(rootQuiz);
    this.root = document.querySelector(rootQuiz);
    this.currentQuestionIndex = 86;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.nextPage = nextPage;
    this.eventsPage = [
      {
        id: '#next',
        event: 'click',
        callback: this.handleNextQuestion.bind(this),
      },
    ];
  }

  onEvents() {
    this.eventsPage.map((e) => {
      const node = document.querySelector(e.id);
      node.addEventListener(e.event, e.callback);
    });
  }

  offEvents() {
    this.eventsPage.map((e) => {
      const node = document.querySelector(e.id);
      node.removeEventListener(e.event, e.callback);
    });
  }

  handleNextQuestion() {
    console.log('handleNextQuestion');
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.root.innerHTML = '';
      this.render();
    }
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.offEvents();
      this.eventsPage = this.nextPage;
      this.eventsPage.map((e) => {
        const node = document.querySelector(e.id);
        node.addEventListener(e.event, e.callback.bind(this));
      });
    }
  }

  toHTML() {
    return `
          <div class="cartQuiz__question">
              <span class="cartQuiz__info">Вопрос
                  ${this.currentQuestionIndex + 1} 
                  из 
                  ${this.questions.length}
              </span>
              <h2>${this.currentQuestion.question}</h2>
          </div>
          <div class="cartQuiz__answer">
              <h3></h3>
          </div>
          <div class="cartQuiz__nav">
              <button id="next" class="button">Далее</button>
          </div>
    `;
  }

  render() {
    const $el = $.create('div', 'cartQuiz');
    $el.html(this.toHTML());
    this.$root.append($el);
    this.onEvents();
  }
}
