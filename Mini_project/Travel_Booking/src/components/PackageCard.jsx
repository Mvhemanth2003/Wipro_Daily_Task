import PropTypes from "prop-types";

const PackageCard = ({ title, location, nights, price, rating, image }) => {
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
          <p className="text-muted mb-1">{location}</p>
          <p className="mb-1">{nights} nights</p>
          <p className="fw-semibold text-primary mb-1">₹{price}</p>
          <span className="badge bg-warning text-dark align-self-start">
            ⭐ {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

PackageCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  nights: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default PackageCard;