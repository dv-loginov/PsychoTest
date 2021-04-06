import {$} from '@core/dom';

export class PageBase {
  constructor(...arg) {
    console.dir(`Переданные параметры:`);
    console.dir(arg);
    console.dir(`--------------------`);
    this.$root = arg[0];
    Object.assign(this, arg[1].dataPage);
    this.eventPage=arg[1].eventsPage;
    this.namePage='';
  }

  toHTML() {
    return ``;
  }

  onEvents() {
    console.log(`${this.namePage} onEvents`);
    this.eventPage.map((e)=>{
      console.log(`Событие установлено`);
      console.log(e);
      const node=document.querySelector(e.id);
      node.addEventListener(e.event, e.callback);
    });
  }

  offEvents() {
    console.log(`${this.namePage} ofEvents`);
    this.eventPage.map((e)=>{
      console.log(`Событие снято`);
      console.log(e);
      const node=document.querySelector(e.id);
      node.removeEventListener(e.event, e.callback);
    });
  }

  render() {
    console.log(`${this.namePage} render`);
    const $el = $.create('div', 'container' );
    $el.html(this.toHTML());
    this.$root.append($el);
    this.onEvents();
  }
}
