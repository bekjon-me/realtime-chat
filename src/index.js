import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/main.scss";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp(
  {
    apiKey: "AIzaSyA9ZSia6DDUVJMEugAEVf3_E3vW1wiAp9U",
    authDomain: "realtime-chat-4125a.firebaseapp.com",
    projectId: "realtime-chat-4125a",
    storageBucket: "realtime-chat-4125a.appspot.com",
    messagingSenderId: "772078084141",
    appId: "1:772078084141:web:6c7687cafcbfa1212d98a4",
    measurementId: "G-29DXRJLNLE"
  }
);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{auth, firestore, firebase}}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
