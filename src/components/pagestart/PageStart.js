import {PageBase} from '@core/PageBase';
import {state} from '@/core/state';
import {$} from '@core/dom';
import {pageStartLayout} from '@/components/pagestart/pageStartLayout';

export class PageStart extends PageBase {
  constructor($root, quiz, emitter) {
    super($root, quiz, {
      name: 'PageStart',
      listeners: ['click'],
      emitter,
    });
    console.log('this', this);
  }

  onClick(event) {
    // $(event.target).data.button === 'nextPage'
    //   ? state.handlerNextPage()
    //   : null;
    $(event.target).data.button === 'nextPage'
      ? this.$emit('startPage:nextPage')
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
