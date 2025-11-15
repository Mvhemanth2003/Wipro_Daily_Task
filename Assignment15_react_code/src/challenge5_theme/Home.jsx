import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Current Theme: {theme}</h3>
    </div>
  );
}