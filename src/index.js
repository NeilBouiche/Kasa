import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";
import "./styles/style.css";

let root = createRoot(document.getElementById("root"));
root.render(<Router />);
