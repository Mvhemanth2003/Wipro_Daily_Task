
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/about.tsx";
import Table from "./components/Table.tsx";
import Home from "./components/Home.tsx";

function App() {
  return (
    <BrowserRouter>
     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div className="d-flex gap-3">
            <Link className="nav-link text-white" to="/">Home</Link>
            <Link className="nav-link text-white" to="/about">About</Link>
            <Link className="nav-link text-white" to="/table">Table</Link>
          </div>
      </nav>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;








