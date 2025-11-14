
export default function createDispatcher() {
  const callbacks = new Set();

  return {
    register(cb) {
      callbacks.add(cb);
      return () => callbacks.delete(cb);
    },
    dispatch(action) {
      for (const cb of callbacks) {
        try {
          cb(action);
        } catch (err) {
          console.error("Dispatcher error:", err);
        }
      }
    }
  };

  
}