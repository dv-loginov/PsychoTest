export class Emitter {
  constructor() {
    this.listeners = {};
    console.log('constructor Emitter');
  }

  // dispatch, fire, trigger
  // Уведомляем слушателей если они есть
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    console.log('emit: event ', event, 'args ', args);
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach(listener => {
      listener(...args);
    });
    console.log('emmet: listeners', this.listeners);
    return true;
  }

  // on, listen
  // Подписываемся на уведомление
  // Добавляем нового слушателя
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    console.log('subscribe', this.listeners);
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn);
    };
  }
}

// Example
// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('vladilen', data => console.log(data))
// emitter.emit('1231231', 42)
//
// setTimeout(() => {
//   emitter.emit('vladilen', 'After 2 seconds')
// }, 2000)
//
// setTimeout(() => {
//   unsub()
// }, 3000)
//
// setTimeout(() => {
//   emitter.emit('vladilen', 'After 4 seconds')
// }, 4000)
