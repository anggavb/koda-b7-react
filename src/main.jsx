import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./globals.css";
import AppRouter from "./AppRouter.jsx";
import { Header, Footer } from "./components";
import UsersProvider from "@/contexts/users/Provider.jsx";

import store, { persistor } from "@/redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <UsersProvider>
        <StrictMode>
          <BrowserRouter>
            <Header />
            <AppRouter />
            <Footer />
          </BrowserRouter>
        </StrictMode>
      </UsersProvider>
    </PersistGate>
  </Provider>,
);
