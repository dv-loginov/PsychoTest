import {$} from '@core/dom';
import {StartPage} from '@/components/startpage/StartPage';
import {WorkPage} from '@/components/workpage/WorkPage';
import {EndPage} from '@/components/endpage/EndPage';

export class Quiz {
  constructor(selector, data) {
    this.$el = $(selector);
    this.pages=[StartPage, WorkPage, EndPage];
    this.indexCurrentPage=0;
    this.name=data.name;
    this.description=data.description;
    this.instruction=data.instruction;
    this.questions=data.questions;
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
    if (this.indexCurrentPage <= this.pages.length-1) {
      this.indexCurrentPage++;
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
    this.$el.append(this.getPage());
    // this.components.forEach((component) => component.init());
  }
}
