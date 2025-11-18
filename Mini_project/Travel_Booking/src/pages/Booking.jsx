import React from "react";
import { motion } from "framer-motion";
import useBookingForm from "../hooks/useBookingForm";

const Booking = () => {
  const formik = useBookingForm();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  const showError = (field) =>
    touched[field] && errors[field] ? (
      <div className="text-danger small">{errors[field]}</div>
    ) : null;

  return (
    <motion.div
      className="container py-4"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
    >
      <h2 className="h4 mb-4 text-center fw-bold">Book Your Trip ✈️</h2>

      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-3 shadow-sm"
          >
            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                name="name"
                className="form-control"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {showError("name")}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                className="form-control"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {showError("email")}
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                name="phone"
                className="form-control"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {showError("phone")}
            </div>

            {/* Destination Dropdown */}
            <div className="mb-3">
              <label className="form-label">Destination</label>
              <select
                name="destination"
                className="form-select"
                value={values.destination}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select your destination</option>
                <option value="Paris, France">Paris, France</option>
                <option value="Bali, Indonesia">Bali, Indonesia</option>
                <option value="Interlaken, Switzerland">Interlaken, Switzerland</option>
                <option value="Maldives">Maldives</option>
                <option value="Singapore">Singapore</option>
                <option value="Dubai, UAE">Dubai, UAE</option>
                <option value="Goa, India">Goa, India</option>
              </select>
              {showError("destination")}
            </div>

            {/* Travellers + Start Date */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Travellers</label>
                <input
                  type="number"
                  name="travellers"
                  className="form-control"
                  value={values.travellers}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min={1}
                />
                {showError("travellers")}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  className="form-control"
                  value={values.startDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {showError("startDate")}
              </div>
            </div>

            {/* Notes */}
            <div className="mb-3">
              <label className="form-label">Notes (Optional)</label>
              <textarea
                name="notes"
                className="form-control"
                rows="3"
                value={values.notes}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Booking;

