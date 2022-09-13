import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArnzmVrDnsesiA8WN0h5W-PDL0mkgZjUE",
  authDomain: "firbase-example-61620.firebaseapp.com",
  projectId: "firbase-example-61620",
  storageBucket: "firbase-example-61620.appspot.com",
  messagingSenderId: "409127599517",
  appId: "1:409127599517:web:bff12ae6df7275d1b1c374",
};

initializeApp(firebaseConfig);

const app = getFirestore();

export default app;
