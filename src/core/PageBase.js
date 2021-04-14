import {$} from '@core/dom';

export class PageBase {
  constructor(...arg) {
    this.$root = arg[0];
    this.dataPage=arg[1];
    this.eventsPage=arg[2];
    Object.assign(this, this.dataPage);
    this.namePage='';
  }

  toHTML() {
    return ``;
  }

  onEvents() {
    this.eventsPage.map((e)=>{
      const node=document.querySelector(e.id);
      node.addEventListener(e.event, e.callback);
    });
  }

  offEvents() {
    this.eventsPage.map((e)=>{
      const node=document.querySelector(e.id);
      node.removeEventListener(e.event, e.callback);
    });
  }

  render() {
    const $el = $.create('div', 'container' );
    $el.html(this.toHTML());
    this.$root.append($el);
    this.onEvents();
  }
}
