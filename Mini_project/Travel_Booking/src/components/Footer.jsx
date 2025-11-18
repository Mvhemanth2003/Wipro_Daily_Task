import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container d-flex justify-content-between align-items-center">
        <span> {new Date().getFullYear()} TravelMate</span>
        <small className="text-muted">Made By  hemanth</small>
      </div>
    </footer>
  );
};

export default Footer;