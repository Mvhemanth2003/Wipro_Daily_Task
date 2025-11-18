import React, { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import { motion } from "framer-motion";
import { getFeaturedDestinations } from "../api/api";

const Home = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getFeaturedDestinations()
      .then((res) => setDestinations(res.data))
      .catch((err) => console.error("Error fetching destinations:", err));
  }, []);

  return (
    <motion.div
      className="container py-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <h2 className="h4 mb-3 fw-semibold mt-4">Featured Destinations</h2>
      <p className="text-muted mb-3">Explore our most loved travel experiences.</p>

      <div className="row">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            title={dest.title}
            location={dest.location}
            price={dest.price}
            image={dest.image}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;