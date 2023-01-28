import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UiProvider from "./features/ui-ctx";
import AuthProvider from "./features/auth-ctx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UiProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </UiProvider>
  </React.StrictMode>
);
