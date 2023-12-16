import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js';

const firebaseConfig = {
  apiKey: "AIzaSyCxZalRIf6mWoXhJlJL7KdvjS-XCliBU5E",
  authDomain: "unix-converter.firebaseapp.com",
  projectId: "unix-converter",
  storageBucket: "unix-converter.appspot.com",
  messagingSenderId: "991388563150",
  appId: "1:991388563150:web:eccd1c476f98499679c29f",
  measurementId: "G-Z7PE01K889"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);