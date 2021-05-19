import {PageBase} from '@core/PageBase';
import {state} from '@/core/state';
import {$} from '@core/dom';
import {pageStartLayout} from '@/components/pagestart/pageStartLayout';

export class PageStart extends PageBase {
  constructor(root) {
    super(root, {
      name: 'PageStart',
      listeners: ['click'],
    });
  }

  onClick(event) {
    $(event.target).data.button === 'nextPage'
      ? state.handlerNextPage()
      : null;
  }

  toHTML() {
    return pageStartLayout(
        state.dataTest.name,
        state.dataTest.description,
        state.dataTest.instruction
    );
  }
}
