import {PageBase} from '@core/PageBase';
// import {state} from '@core/state';
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
    console.log(this.name, 'click');
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
