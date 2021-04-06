import {$} from '@core/dom';
import {PageStart} from '@/components/pagestart/PageStart';
import {PageWork} from '@/components/pagework/PageWork';
import {PageEnd} from '@/components/pageend/PageEnd';

export class QuizTemp {
  constructor(selector, data) {
    this.$el = $(selector);
    this.pages=[PageStart, PageWork, PageEnd];
    this.indexCurrentPage=0;
    this.currentPage=null;
    Object.assign(this, data);

    this.arg=[
      {
        name: this.name,
        description: this.description,
        instruction: this.instruction,
      },
      {
        name: this.name,
        questions: this.questions,
      },
      {
        name: this.name,
      },
    ];
  }

  nextPage() {
    if (this.indexCurrentPage < this.pages.length-1) {
      this.indexCurrentPage++;
      const app=document.querySelector( '#app' );
      app.innerHTML='';
      this.render();
    }
  }

  getPage() {
    const $el = $.create('div', 'container' );
    const Page = this.pages[this.indexCurrentPage];
    const argPage = this.arg[this.indexCurrentPage];
    const page = new Page(argPage);
    $el.html(page.toHTML());
    return $el;
  }

  render() {
    console.log('render');

    this.$el.append(this.getPage());
    const nextButton=document.querySelector('#next');
    if (nextButton) {
      nextButton.onclick = this.nextPage.bind(this);
    }
    console.log(this.$el);
  }
}
