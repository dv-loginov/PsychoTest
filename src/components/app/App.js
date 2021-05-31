import {$} from '@core/dom';
import {PageStart} from '@/components/pagestart/PageStart';
import {PageWork} from '@/components/pagework/PageWork';
import {PageEnd} from '@/components/pageend/PageEnd';
import {QuizBase} from '@core/QuizBase';
import {state} from '@/core/state';
import {Emitter} from '@core/Emitter';

export class App {
  constructor(selector, data) {
    console.log('App run');
    this.$root = $(selector);
    this.pages = [PageStart, PageWork, PageEnd];
    this.indexCurrentPage = 0;
    this.currentPage = null;
    this.quiz = new QuizBase(data);
    this.emitter = new Emitter();
    this.unsubscribers = [];
    this.sub();

    state.handlerNextPage = this.handlerNextPage.bind(this);
  }

  sub() {
    const unsub = this.emitter.subscribe(
        'startPage:nextPage',
        this.handlerNextPage,
    );
    this.unsubscribers.push(unsub);
  }

  handlerNextPage() {
    if (this.indexCurrentPage < this.pages.length - 1) {
      this.indexCurrentPage++;
      this.currentPage.destroy();
      this.$root.clear();
      this.render();
    }
  }

  render() {
    console.log('render app');
    const PageName = this.pages[this.indexCurrentPage];
    const page = new PageName(this.$root, this.quiz, this.emitter);
    this.currentPage = page;
    page.render();
  }
}
