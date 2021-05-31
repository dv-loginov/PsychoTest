import {DomListener} from '@core/DomListener';
import {$} from '@core/dom';

export class PageBase extends DomListener {
  constructor($root, quiz, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.quiz = quiz;
    this.emitter = options.emitter;
    this.unsubscribers = [];
    this.prepare();
  }

  // Настраивааем наш компонент до init
  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return ``;
  }

  // Уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // Инициализируем компонент
  // Добавляем DOM слушателей
  init() {
    this.initDOMListeners();
  }

  // Подписываемся на событие event
  $on(event, fn) {
    console.log('on this', this);
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub());
  }

  getContent() {
    const componentOptions = {
      emitter: this.emitter,
    };
    const $content = $.create('div', 'container');
    $content.html(this.toHTML());
    return $content;
  }

  render() {
    this.$root.append(this.getContent().$el);
    this.init();
  }
}
