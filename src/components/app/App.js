import {$} from '@core/dom';
import {PageStart} from '@/components/pagestart/PageStart';
import {PageWork} from '@/components/pagework/PageWork';
import {PageEnd} from '@/components/pageend/PageEnd';
import {state} from '@/core/state';

export class App {
  constructor(selector) {
    this.root = selector;
    this.pages = [PageStart, PageWork, PageEnd];
    this.indexCurrentPage = 2;
    this.currentPage = null;
    state.handlerNextPage = this.handlerNextPage.bind(this);
  }

  handlerNextPage() {
    console.log('nextPage');
    if (this.indexCurrentPage < this.pages.length - 1) {
      this.indexCurrentPage++;
      this.currentPage.offEvents();
      const app = document.querySelector('#app');
      app.innerHTML = '';
      this.render();
    }
  }

  render() {
    console.log('render app');
    const PageName = this.pages[this.indexCurrentPage];
    const page = new PageName(this.root);
    this.currentPage = page;
    page.render();
  }
}
