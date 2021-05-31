import {PageBase} from '@core/PageBase';
import {pageEndLayout} from '@/components/pageend/pageEndLayout';

export class PageEnd extends PageBase {
  constructor($root, quiz) {
    super($root, quiz, {
      name: 'PageEnd',
      listeners: ['click'],
    });
    this.quiz.counting();
    this.quiz.getRezults;
  }

  onClick(event) {
    if (event.target.dataset.button === 'theEnd') {
      document.location.replace('http://dv-loginov.ru');
    }
  }

  toHTML() {
    return pageEndLayout(
        this.quiz.getName,
        this.quiz.getLimit,
        this.quiz.getRezults,
        this.quiz.getLegend
    );
  }
}
