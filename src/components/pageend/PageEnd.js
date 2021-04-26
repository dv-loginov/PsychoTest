import {PageBase} from '@core/PageBase';

export class PageEnd extends PageBase {
  constructor(root) {
    super(root);
    this.eventsPage = [];
  }

  toHTML() {
    return `
    <h1>EndPage</h1>
    `;
  }
}
