import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  const location = useLocation();

  return (
    <Layout>  {/* FULL SCREEN WRAPPER */}
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          <div className="page-wrapper">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </AnimatePresence>
      </ErrorBoundary>
    </Layout>
  );
};

export default App;