import {PageBase} from '@core/PageBase';
import {$} from '@core/dom';
import {pageStartLayout} from '@/components/pagestart/pageStartLayout';

export class PageStart extends PageBase {
  constructor($root, quiz) {
    super($root, quiz, {
      name: 'PageStart',
      listeners: ['click'],
    });
  }

  onClick(event) {
    $(event.target).data.button === 'nextPage'
      ? window.handlerNextPage()
      : null;
  }

  toHTML() {
    return pageStartLayout(
        this.quiz.getName,
        this.quiz.getDescription,
        this.quiz.getInstruction
    );
  }
}
