import React, { useState } from "react";
import LazyLoading from "./components/LazyLoading";
import PureComponentDemo from "./components/PureComponentDemo";
import ErrorBoundaryDemo from "./components/ErrorBoundaryDemo";
import PortalsDemo from "./components/PortalsDemo";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState("");

  const renderContent = () => {
    switch (activeTab) {
      case "lazy":
        return <LazyLoading />;
      case "pure":
        return <PureComponentDemo />;
      case "error":
        return <ErrorBoundaryDemo />;
      case "portal":
        return <PortalsDemo />;
      default:
        
    }
  };

  return (
    <>
      <div className="top-buttons">
        <button onClick={() => setActiveTab("lazy")}>Lazy Loading</button>
        <button onClick={() => setActiveTab("pure")}>Pure Component</button>
        <button onClick={() => setActiveTab("error")}>Error Boundary</button>
        <button onClick={() => setActiveTab("portal")}>Portals</button>
      </div>

      <div className="output">{renderContent()}</div>
    </>
  );
}

export default App;