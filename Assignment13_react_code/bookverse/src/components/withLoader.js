
import React, { useState, useEffect } from "react";

const withLoader = (WrappedComponent) => {
  return function WithLoaderComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading time
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return (
        <div className="loader-container">
          <div className="spinner">📚</div>
          <p>Loading content...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoader;