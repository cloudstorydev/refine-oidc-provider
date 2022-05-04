import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import App from "./App";

import { AuthProvider } from "react-oidc-context";


/*  SAMPLE Config for OIDC Provider

const oidcConfig = {
    authority: "<your oidc url>",
    client_id: "<your client-id>",
    redirect_uri: window.location.origin,
    scope: "openid email profile access_plans tenant"

  };
 */

  /* Config for Cognito OIDC Provider  */
  const oidcConfig = {
    authority: "https://cognito-idp.<region>.amazonaws.com/ap-southeast-1_<pool-id>",
    client_id: "<client-id from cognito console>",
    client_secret: "<client-secret from cognito console>",
    redirect_uri: window.location.origin,
    scope: "openid email profile",
    code_challenge_method:"S256",
    code_challenge:"CODE_CHALLENGE"

  };


ReactDOM.render(
    <AuthProvider {...oidcConfig}>

    <App />

  </AuthProvider>
  ,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
