import {$} from '@core/dom';
import {PageStart} from '@/components/pagestart/PageStart';
import {PageWork} from '@/components/pagework/PageWork';
import {PageEnd} from '@/components/pageend/PageEnd';

export class App {
  constructor(selector, data) {
    this.$el = $(selector);
    Object.assign(this, data);
    this.pages = [
      {
        pageName: PageStart,
        dataPage: {
          name: this.name,
          description: this.description,
          instruction: this.instruction,
        },
        eventsPage: [
          {
            id: '#next',
            event: 'click',
            callback: this.handlerNextPage.bind(this),
          },
        ],
      },
      {
        pageName: PageWork,
        dataPage: {
          name: this.name,
          questions: this.questions,
        },
        eventsPage: [
          {
            id: '#next',
            event: 'click',
            callback: this.handlerNextPage.bind(this),
          },
        ],
      },
      {
        pageName: PageEnd,
        dataPage: {
          name: this.name,
        },
        eventsPage: [],
      },
    ];

    this.indexCurrentPage = 1;
    this.currentPage = null;
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
    const PageName = this.pages[this.indexCurrentPage].pageName;
    const dataPage = this.pages[this.indexCurrentPage].dataPage;
    const eventsPage = this.pages[this.indexCurrentPage].eventsPage;
    const page = new PageName(this.$el, dataPage, eventsPage);
    this.currentPage = page;
    page.render();
  }
}
