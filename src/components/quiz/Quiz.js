import {$} from '@core/dom';
import {PageStart} from '@/components/pagestart/PageStart';
import {PageWork} from '@/components/pagework/PageWork';
import {PageEnd} from '@/components/pageend/PageEnd';

export class Quiz {
  constructor(selector, data) {
    this.$el = $(selector);
    this.pages = [PageStart, PageWork, PageEnd];
    this.indexCurrentPage = 0;
    this.currentPage=null;
    Object.assign(this, data);
    this.opt = [
      {
        dataPage: {
          name: this.name,
          description: this.description,
          instruction: this.instruction,
        },
        eventsPage: [
          {id: '#start', event: 'click', callback: this.nextPage.bind(this)},
        ],
      },
      {
        dataPage: {
          name: this.name,
          questions: this.questions,
        },
        eventsPage: [
          {id: '#next', event: 'click', callback: this.nextPage.bind(this)},
        ],
      },
      {
        dataPage: {
          name: this.name,
        },
        eventsPage: [],
      },
    ];
  }

  nextPage() {
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
    const Page = this.pages[this.indexCurrentPage];
    const page = new Page(this.$el, this.opt[this.indexCurrentPage]);
    this.currentPage = page;
    page.render();
  }
}
