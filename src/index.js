import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyCodlVKO-dm1T4RP6AHj4Bed4Otzgi9Ca4",
  authDomain: "netflix-scrimbaclone.firebaseapp.com",
  projectId: "netflix-scrimbaclone",
  storageBucket: "netflix-scrimbaclone.appspot.com",
  messagingSenderId: "733851151665",
  appId: "1:733851151665:web:d06987f0d02e9022c85410",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
