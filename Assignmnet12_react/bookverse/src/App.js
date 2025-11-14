
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import createDispatcher from "./flux/dispatcher";
import createBookStore from "./flux/store";
import { fetchBooks } from "./flux/books";
import "bootstrap/dist/css/bootstrap.min.css";

//  Dependency Injection setup
const dispatcher = createDispatcher();
const store = createBookStore(dispatcher);

// Preload books on app start
fetchBooks(dispatcher);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<BookList store={store} />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}


export default App;