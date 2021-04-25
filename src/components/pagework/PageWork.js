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
