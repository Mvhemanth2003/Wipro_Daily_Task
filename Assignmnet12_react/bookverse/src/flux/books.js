
export const ActionTypes = {
  SET_BOOKS: "SET_BOOKS",
  ADD_BOOK: "ADD_BOOK",
  FETCH_ERROR: "FETCH_ERROR"
};

//  Simple JSON Server API calls
const BASE_URL = "http://localhost:4000";

const api = {
  async getBooks() {
    const res = await fetch(`${BASE_URL}/books`);
    if (!res.ok) throw new Error("Failed to fetch books");
    return res.json();
  },
  async addBook(book) {
    const res = await fetch(`${BASE_URL}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    });
    if (!res.ok) throw new Error("Failed to add book");
    return res.json();
  }
};

//  Flux actions
export const fetchBooks = async (dispatcher) => {
  try {
    const data = await api.getBooks();
    dispatcher.dispatch({ type: ActionTypes.SET_BOOKS, payload: data });
  } catch (err) {
    dispatcher.dispatch({ type: ActionTypes.FETCH_ERROR, payload: err.message });
  }
};

export const addBook = async (dispatcher, book) => {
  try {
    const newBook = await api.addBook(book);
    dispatcher.dispatch({ type: ActionTypes.ADD_BOOK, payload: newBook });
  } catch (err) {
    dispatcher.dispatch({ type: ActionTypes.FETCH_ERROR, payload: err.message });
  }
};

export default api;