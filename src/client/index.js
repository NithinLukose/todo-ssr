import React from "react";
import { hydrateRoot } from "react-dom/client";
import Landing from "./components/Landing";

hydrateRoot(document.getElementById("root"), <Landing />);
// root.render(<Landing />);
