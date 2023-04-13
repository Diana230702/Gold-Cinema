import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/auth/AuthProvider";
import AppProvider from "./contexts/app/AppProvider";
import withAuth from "./hoc/withAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppWithRefreshToken = withAuth(App)

root.render(
  <BrowserRouter>
    <AppProvider>
      <AuthProvider>
        <AppWithRefreshToken />
      </AuthProvider>
    </AppProvider>
  </BrowserRouter>
);
