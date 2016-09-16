'use strict';

import EventEmitter from './event-emitter';

export default class Store extends EventEmitter {
  constructor(dispatcher) {
    super();
    this._count = 0;

    // <--- observe event.
    dispatcher.on('countUp', count => this.onCountUp(count));
  }

  getCount() {
    return this._count;
  }

  onCountUp(count) {
    if (this._count === count) return;

    this._count = count;
    // emit 'CHANGE' ---> self
    this.emit('CHANGE');
  }
}
