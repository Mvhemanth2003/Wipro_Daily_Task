import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
      <h2>React App</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  );
}