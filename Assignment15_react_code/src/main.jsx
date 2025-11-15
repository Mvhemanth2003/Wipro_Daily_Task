import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { Provider } from "react-redux";
import { store } from "./challenge8_redux/store";
import { ThemeProvider } from "./challenge5_theme/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);



