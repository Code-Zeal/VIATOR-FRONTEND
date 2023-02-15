import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-cz6i21an2opri7kv.us.auth0.com"
      clientId="Op3PZMpZSk3hNvSTG9qRurhQip9WssPh"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://dev-cz6i21an2opri7kv.us.auth0.com/api/v2/",
        scope: "read:current_user update:current_user_metadata",
      }}
    >
      <App />
    </Auth0Provider>
    ,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
