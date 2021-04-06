import {PageBase} from '@core/PageBase';

export class PageEnd extends PageBase {
  constructor(...arg) {
    super(...arg);
    this.namePage='PageEnd';
  }

  toHTML() {
    return `
    <h1>EndPage</h1>
    `;
  }
}
