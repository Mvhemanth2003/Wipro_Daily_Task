import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <motion.div
      className="container py-5 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="mb-3">404 - Page Not Found</h2>
      <p className="mb-3">The page you’re looking for doesn’t exist.</p>
      <Link to="/home" className="btn btn-primary">
        Go back Home
      </Link>
    </motion.div>
  );
};

export default NotFound;