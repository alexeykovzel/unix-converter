import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHLy7HGDwUwOGGDOejiIFCu1iAqZXRIqY",
  authDomain: "unix-epoch.firebaseapp.com",
  projectId: "unix-epoch",
  storageBucket: "unix-epoch.appspot.com",
  messagingSenderId: "446182918289",
  appId: "1:446182918289:web:b179fa5242243a4657d730",
  measurementId: "G-J90R0G01VZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);