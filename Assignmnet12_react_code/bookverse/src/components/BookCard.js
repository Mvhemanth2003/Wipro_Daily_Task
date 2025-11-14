import React from "react";
import "./components.css";

const BookCard = ({ id, title, author, price, viewMode, onViewDetails }) => {
  const handleViewDetails = (e) => {
    e.stopPropagation();
    onViewDetails(id, author);
  };

  return (
    <div className={`card shadow-sm border-0 p-3 mb-3 ${viewMode}`}>
  <div className="card-body">
    <h5 className="card-title text-primary fw-bold">{title}</h5>
    <p className="card-text mb-1"><strong>Author:</strong> {author}</p>
    <p className="card-text"><strong>Price:</strong> ₹{price}</p>
    <button className="btn btn-success mt-2" onClick={handleViewDetails}>
      View Details →
    </button>
  </div>
</div>
  );
};

export default BookCard;