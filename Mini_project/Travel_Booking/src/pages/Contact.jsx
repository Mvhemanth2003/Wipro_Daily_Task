import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="container py-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <h2 className="h4 mb-4 text-center fw-bold">Contact Us </h2>

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="p-4 bg-white rounded-3 shadow-sm text-center">

            <p className="mb-3 fs-5 fw-semibold text-primary">
              We're here to help
            </p>

            <p className="mb-2 fs-6">
               <strong>Email : travel@gmail.com</strong>
            </p>

            <p className="mb-3 fs-6">
               <strong>Number : 9999999999</strong>
            </p>

            <p className="mb-0 text-muted">
              Our team is available 24x7 to help you with bookings and queries.
            </p>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;