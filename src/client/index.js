import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/Routes";

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
