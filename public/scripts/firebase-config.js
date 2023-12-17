import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js';

const firebaseConfig = {
  apiKey: "AIzaSyDJZL2mZKkXZ5xXjUsZ-sv_BdNJzsd-oFI",
  authDomain: "unix-time-tool.firebaseapp.com",
  projectId: "unix-time-tool",
  storageBucket: "unix-time-tool.appspot.com",
  messagingSenderId: "611619157383",
  appId: "1:611619157383:web:180257703cc023bcd28f22",
  measurementId: "G-LW4NEDM0W6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
