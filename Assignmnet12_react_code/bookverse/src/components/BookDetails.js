// components/BookDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import withLoader from "./withLoader";
import AuthorInfo from "./AuthorInfo";
import "./components.css";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/books/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Book not found");
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching book:", err);
        setBook(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loader">Loading book details...</div>;

  if (!book)
    return (
      <div className="error-container">
        <h4>Book not found</h4>
        <Link to="/home" className="btn">
          ← Back to Home
        </Link>
      </div>
    );

  return (
    <div className="book-details-page">
      {/* Book Info Card */}
      <div className="book-details-card">
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Price:</strong> ₹{book.price}</p>
        <Link to="/home" className="btn">
          ← Back to Home
        </Link>
      </div>

      {/* Author Info Card */}
      <AuthorInfo author={book.author} />
    </div>
  );
};

export default withLoader(BookDetails);