import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./globals.css";
import AppRouter from "./AppRouter.jsx";
import { Header, Footer } from "./components";
import UsersProvider from "@/contexts/users/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <UsersProvider>
    <StrictMode>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </StrictMode>
  </UsersProvider>,
);
