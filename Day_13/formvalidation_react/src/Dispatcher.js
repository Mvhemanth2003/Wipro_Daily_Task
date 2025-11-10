
class Dispatcher {
  constructor() {
    this.callbacks = [];
  }

  register(callback) {
    this.callbacks.push(callback);
  }

  dispatch(action) {
    this.callbacks.forEach((callback) => callback(action));
  }
}

const dispatcher = new Dispatcher();
export default dispatcher;
