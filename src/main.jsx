import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route, BrowserRouter, Routes } from "react-router";
import Item from "./item.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
