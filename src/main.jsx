import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

import "./globals.css";
import AppRouter from "./AppRouter.jsx";
import { Header, Footer } from "./components";
import UsersProvider from "@/contexts/users/Provider.jsx";

import store from "@/redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UsersProvider>
      <StrictMode>
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </StrictMode>
    </UsersProvider>
  </Provider>,
);
