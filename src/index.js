import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.scss";

import App from "./drummech.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
