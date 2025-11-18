import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PackageCard from "../components/PackageCard";
import { getPackages } from "../api/api";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPackages()
      .then((res) => {
        setPackages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching packages:", err);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      className="container py-4"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
    >
      <h2 className="h4 mb-3">Travel Packages</h2>
      {loading ? (
        <p>Loading packages...</p>
      ) : (
        <div className="row">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              title={pkg.title}
              location={pkg.location}
              nights={pkg.nights}
              price={pkg.price}
              rating={pkg.rating}
              image={pkg.image}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Packages;