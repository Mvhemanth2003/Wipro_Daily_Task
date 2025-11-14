import React, { useState, useEffect, useRef } from "react";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";
import RenderPropsUI from "./RenderPropsUI";
import withLoader from "./withLoader";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BookList = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (id, author) => {
    navigate(`/book/${id}`);
  };

  const focusSearch = () => {
    if (searchInputRef.current) searchInputRef.current.focus();
  };

  if (loading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2 text-muted">📚 Loading Books...</p>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger text-center my-5" role="alert">
        <h5>Error Loading Books</h5>
        <p>{error}</p>
        <p>Please make sure JSON Server is running on port 4000.</p>
      </div>
    );

  return (
    <div className="container py-4">
      <RenderPropsUI>
        {({ greeting, startLoading }) => (
          <>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
              <h2 className="fw-bold text-dark"> Featured Books</h2>
              <div className="text-end">
                <p className="text-muted mb-1">{greeting}</p>
                <button className="btn btn-outline-primary btn-sm" onClick={startLoading}>
                  Refresh
                </button>
              </div>
            </div>

            {/* Search and View Controls */}
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
              <input
                ref={searchInputRef}
                type="text"
                placeholder=" Search books by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control w-50"
              />

              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary" onClick={startLoading}>
                  Refresh
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
                    viewMode === "list" ? "btn-secondary" : "btn-outline-secondary"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  List
                </button>
                <button className="btn btn-outline-success" onClick={focusSearch}>
                  Focus Search
                </button>
              </div>
            </div>

            {/* Books Display */}
            {filteredBooks.length === 0 ? (
              <div className="text-center py-5 text-muted">
                <h5>No books found</h5>
                <p>Try adjusting your search term.</p>
              </div>
            ) : (
              <>
                <p className="text-secondary mb-3">
                  Showing {filteredBooks.length} of {books.length} books
                </p>

                <div
                  className={`${
                    viewMode === "grid"
                      ? "row row-cols-1 row-cols-md-3 g-4"
                      : "d-flex flex-column gap-3"
                  }`}
                >
                  {filteredBooks.map((book) => (
                    <div key={book.id} className={viewMode === "grid" ? "col" : ""}>
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

            {selectedAuthor && <AuthorInfo author={selectedAuthor} />}
          </>
        )}
      </RenderPropsUI>
    </div>
  );
};

export default withLoader(BookList);
