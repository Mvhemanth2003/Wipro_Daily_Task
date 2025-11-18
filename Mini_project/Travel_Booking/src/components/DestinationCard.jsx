import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DestinationCard = ({ title, location, price, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-1">{title}</h5>
          <p className="text-muted mb-2">{location}</p>
          <p className="fw-semibold text-primary mb-3">From ₹{price}</p>

          {/* Replace wishlist with Book Now */}
          <Link to="/booking" className="btn btn-primary mt-auto">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default DestinationCard;