// components/RenderPropsUI.js
import React, { useState } from "react";

const RenderPropsUI = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("Reader");

  // Simulate user greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return children({
    loading,
    greeting: `${getGreeting()}, ${user}!`,
    startLoading,
    setUser
  });
};

export default RenderPropsUI;
