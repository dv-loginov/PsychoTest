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
    this.nextButton = false;
    this.isEnd = false;
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
  }

  onEvents() {
    this.eventsPage.map((e) => {
      const node = document.querySelector(e.id);
      console.log(`Ставим событик на ${e.id}`);
      node.addEventListener(e.event, e.callback);
    });
  }

  offEvents() {
    this.eventsPage.map((e) => {
      const node = document.querySelector(e.id);
      node.removeEventListener(e.event, e.callback);
    });
  }

  handleAnswer(e) {
    if (e.target.type === 'radio') {
      console.log(e.target.value);
      console.log(this.currentQuestion);
      this.nextButton = true;
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.isEnd = true;
      }
    }
  }

  handleNextQuestion() {
    console.log('handleNextQuestion');
    console.log(this.nextButton);
    if (this.nextButton) {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        this.root.innerHTML = '';
        this.render();
      }
      if (this.isEnd) {
        if (this.currentQuestionIndex === this.questions.length - 1) {
          this.offEvents();
          this.eventsPage = this.nextPage;
          this.eventsPage.map((e) => {
            const node = document.querySelector(e.id);
            node.addEventListener(e.event, e.callback.bind(this));
          });
        }
      }
    }
    this.nextButton = false;
    console.log(this.nextButton);
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
                >Далее</button>
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
