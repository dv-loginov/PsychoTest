import {PageBase} from '@core/PageBase';
import {PageQuiz} from '@/components/pagequiz/PageQuiz';

export class PageWork extends PageBase {
  constructor(...arg) {
    super(...arg);
    this.namePage = 'PageWork';
    this.rootQuiz='#cartQuiz';
    this.nextPage = null;
  }

  onEvents() {
    this.nextPage = this.eventsPage;
    this.pageQuiz=new PageQuiz(this.rootQuiz, this.questions, this.nextPage);
    this.pageQuiz.render();
  }

  // handleNextQuestion() {
  //   console.log(`nextQuestion`);
  //   console.log(this.currentQuestionIndex+1);
  //   if (this.currentQuestionIndex < this.questions.length - 1) {
  //     this.currentQuestionIndex++;
  //     this.currentQuestion = this.questions[this.currentQuestionIndex];
  //     const app = document.querySelector('#app');
  //     app.innerHTML = '';
  //     this.render();
  //   }
  //   if (this.currentQuestionIndex === this.questions.length - 1) {
  //     this.offEvents();
  //     this.eventsPage = this.nextPage;
  //     this.eventsPage.map((e) => {
  //       const node = document.querySelector(e.id);
  //       node.addEventListener(e.event, e.callback.bind(this));
  //     });
  //   }
  // }

  toHTML() {
    return `
    <div class="header">
        <h1 class="header__text">${this.name}</h1>
    </div>
    <div id="cartQuiz">
    </div>
    `;
  }
}
