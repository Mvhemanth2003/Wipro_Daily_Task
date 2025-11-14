
import { ActionTypes, fetchBooks as fetchBooksAction, addBook as addBookAction } from "./books";

export default function createBookStore(dispatcher) {
  let books = [];
  let error = null;
  const listeners = new Set();

  // Notify components of updates
  const emitChange = () => listeners.forEach((l) => l());

  // Handle all Flux actions here
  const handleAction = (action) => {
    switch (action.type) {
      case ActionTypes.SET_BOOKS:
        books = action.payload;
        error = null;
        emitChange();
        break;

      case ActionTypes.ADD_BOOK:
        books = [action.payload, ...books]; // add new book at top
        emitChange();
        break;

      case ActionTypes.FETCH_ERROR:
        error = action.payload;
        emitChange();
        break;

      default:
        break;
    }
  };

  // Register the dispatcher listener
  const unsubscribe = dispatcher.register(handleAction);

  //  Return store functions accessible by UI
  return {
    getBooks: () => books.slice(),
    getError: () => error,

    subscribe(cb) {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },

    teardown() {
      unsubscribe();
      listeners.clear();
    },

    //  These two functions are required by BookList & AddBookForm
    async fetchBooks() {
      await fetchBooksAction(dispatcher);
    },

    async addBook(book) {
      await addBookAction(dispatcher, book);
    }
  };
}