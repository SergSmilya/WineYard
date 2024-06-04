import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google"
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from "react-redux";
import { persistor, store } from "./store/index.ts";
import { HashRouter } from "react-router-dom";
// const GOOGLE_API_TOKEN = process.env.REACT_APP_WineYard_GOOGLE_API_TOKEN;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId='985644577186-sr0tejl4c42qncivrlcqcls1e28rqv6p.apps.googleusercontent.com'>
  {/* <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_API_TOKEN}> */}
    <React.StrictMode>
      <HashRouter basename="/">
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </HashRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
