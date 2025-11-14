
import React, { useState, useEffect, useRef } from "react";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";
import RenderPropsUI from "./RenderPropsUI";
import withLoader from "./withLoader";
import AddBookForm from "./AddBookForm";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BookList = ({ store }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  //  Subscribe to store updates
  useEffect(() => {
    if (!store) return;

    const onChange = () => {
      setBooks(store.getBooks());
      setError(store.getError());
    };

    store.fetchBooks().catch((e) => setError(e.message));
    const unsubscribe = store.subscribe(onChange);
    return () => unsubscribe();
  }, [store]);

  //  Filter search
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //  Navigate to Book Details page
  const handleViewDetails = (id, author) => {
    setSelectedAuthor(author);
    navigate(`/book/${id}`);
  };

  //  Focus search bar
  const focusSearch = () => {
    if (searchInputRef.current) searchInputRef.current.focus();
  };

  if (error) {
    return (
      <div className="alert alert-danger text-center my-5">
        <h5>Error Loading Books</h5>
        <p>{error}</p>
        <p>Please ensure JSON Server is running on port 4000</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <RenderPropsUI>
        {() => (
          <>
            {/* ================= Header ================= */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
              <h2 className="fw-bold text-dark mb-2">📖 Featured Books</h2>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-success"
                  onClick={() => setShowForm(!showForm)}
                >
                  {showForm ? "Close Form" : "➕ Add New Book"}
                </button>

                <button
                  className={`btn ${
                    viewMode === "grid" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  Grid
                </button>

                <button
                  className={`btn ${
                    viewMode === "list" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  List
                </button>
              </div>
            </div>

            {/* ================= Add Book Form ================= */}
            {showForm && (
              <AddBookForm store={store} onClose={() => setShowForm(false)} />
            )}

            {/* ================= Search Bar ================= */}
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="🔍 Search books by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control w-50"
              />
              <button className="btn btn-outline-secondary" onClick={focusSearch}>
                Focus Search
              </button>
            </div>

            {/* ================= Book List ================= */}
            {filteredBooks.length === 0 ? (
              <div className="text-center py-5 text-muted">
                <h5>No books found</h5>
                <p>Try adjusting your search term.</p>
              </div>
            ) : (
              <>
                <p className="text-muted">
                  Showing {filteredBooks.length} of {books.length} books
                </p>

                <div
                  className={
                    viewMode === "grid"
                      ? "row row-cols-1 row-cols-md-3 g-4"
                      : "d-flex flex-column gap-3"
                  }
                >
                  {filteredBooks.map((book) => (
                    <div
                      key={book.id}
                      className={viewMode === "grid" ? "col" : ""}
                    >
                      <BookCard
                        {...book}
                        viewMode={viewMode}
                        onViewDetails={handleViewDetails}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ================= Author Info ================= */}
            {selectedAuthor && <AuthorInfo author={selectedAuthor} />}
          </>
        )}
      </RenderPropsUI>
    </div>
  );
};

export default withLoader(BookList);