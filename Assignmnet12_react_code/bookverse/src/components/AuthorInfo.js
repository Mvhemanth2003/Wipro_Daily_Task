// components/AuthorInfo.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AuthorInfo = ({ author }) => {
  const [authorData, setAuthorData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!author) return;

    setLoading(true);
    fetch("http://localhost:4000/authorData")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch author data");
        return res.json();
      })
      .then((data) => {
        setAuthorData(data[author]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching author data:", err);
        setAuthorData(null);
        setLoading(false);
      });
  }, [author]);

  if (!author) return null;

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2 text-muted">Fetching author info...</p>
      </div>
    );
  }

  if (!authorData) {
    return (
      <div className="card border-0 shadow-sm mt-4 p-3">
        <div className="d-flex align-items-start gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Author"
            className="rounded"
            style={{ width: "100px", height: "120px", objectFit: "cover" }}
          />
          <div>
            <h4 className="fw-bold text-dark mb-1">{author}</h4>
            <p className="text-muted mb-0">No author information available.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-sm mt-4 p-3">
      <div className="d-flex align-items-start gap-3">
        <img
          src={
            authorData.image ||
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          alt={author}
          className="rounded"
          style={{ width: "100px", height: "120px", objectFit: "cover" }}
        />
        <div>
          <h4 className="fw-bold text-dark mb-1">{author}</h4>
          <p className="text-muted mb-0">
            {authorData.bio || "No biography available."}
          </p>
        </div>
      </div>

      <div className="mt-3 border-top pt-2">
        <h6 className="text-primary fw-semibold mb-2">📚 Top Books</h6>
        <ul className="list-unstyled mb-0">
          {authorData.topBooks && authorData.topBooks.length > 0 ? (
            authorData.topBooks.map((book, i) => (
              <li
                key={i}
                className="bg-light p-2 rounded mb-2"
                style={{ fontSize: "0.95rem" }}
              >
                {book}
              </li>
            ))
          ) : (
            <li className="text-muted">No books listed</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AuthorInfo;
