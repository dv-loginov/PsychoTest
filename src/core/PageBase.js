import {$} from '@core/dom';

export class PageBase {
  constructor(root) {
    this.$root = $(root);
  }
  toHTML() {
    return ``;
  }
  getContent() {
    const $content = $.create('div', 'container' );
    $content.html(this.toHTML());
    return $content;
  }
  onEvents() {
    this.eventsPage.map((e)=>{
      const node = document.querySelector(e.id);
      node.addEventListener(e.event, e.callback);
    });
  }
  offEvents() {
    this.eventsPage.map((e)=>{
      const node = document.querySelector(e.id);
      node.removeEventListener(e.event, e.callback);
    });
  }
  render() {
    this.$root.append(this.getContent().$el);
    this.onEvents();
  }
}
