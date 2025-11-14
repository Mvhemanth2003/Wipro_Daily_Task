import React, { useState } from "react";

const StatsCard = React.memo(({ title, value, lastUpdated }) => {
  console.log(`Rendered: ${title}`);
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px auto",
        borderRadius: "10px",
        width: "300px",
      }}
    >
      <h4>{title}</h4>
      <p>Value: {value}</p>
      <small>Last Updated: {lastUpdated}</small>
    </div>
  );
});

export default function PureComponentDemo() {
  const [stats, setStats] = useState([
    { title: "Users", value: 150, lastUpdated: "10 mins ago" },
    { title: "Sales", value: 300, lastUpdated: "5 mins ago" },
  ]);

  const simulateUpdate = () => {
    setStats((prev) => [
      { ...prev[0], value: prev[0].value + 10 },
      prev[1],
    ]);
  };

  return (
    <div>
      <h2>Pure Components Demo</h2>
      <button onClick={simulateUpdate}>Simulate Update</button>
      {stats.map((s, i) => (
        <StatsCard key={i} {...s} />
      ))}
    </div>
  );
}



