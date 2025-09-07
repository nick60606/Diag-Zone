import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/tailwind.css";
import "./styles/index.css";

import HomePage from "./pages/homepage/index.jsx";
import ServicesByBrand from "./pages/services-by-brand/index.jsx";
import ClientPortal from "./pages/client-portal-dashboard/index.jsx";

function NotFound() {
  return <div style={{padding:24}}>404 — Page not found. <a href="/">Go Home</a></div>;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services-by-brand" element={<ServicesByBrand />} />
        <Route path="/client-portal" element={<ClientPortal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
