import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7ws7mpl4dGlqE7z0klIB51a5Puyu56h0",
  authDomain: "karyayoga-4d774.firebaseapp.com",
  projectId: "karyayoga-4d774",
  storageBucket: "karyayoga-4d774.appspot.com",
  messagingSenderId: "925007131026",
  appId: "1:925007131026:web:9e73bff354f55af1ec514b",
  measurementId: "G-NNRCWHVLXS"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


