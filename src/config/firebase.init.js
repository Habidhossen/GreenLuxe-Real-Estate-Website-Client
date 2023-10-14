import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: process.env.apiKey,
  //   authDomain: process.env.authDomain,
  //   projectId: process.env.projectId,
  //   storageBucket: process.env.storageBucket,
  //   messagingSenderId: process.env.messagingSenderId,
  //   appId: process.env.appId,
  apiKey: "AIzaSyA84LcUHO2nhL2070DQnqqxvjZD0MCCC2g",
  authDomain: "greenluxe-real-estate-website.firebaseapp.com",
  projectId: "greenluxe-real-estate-website",
  storageBucket: "greenluxe-real-estate-website.appspot.com",
  messagingSenderId: "408134529080",
  appId: "1:408134529080:web:f64f54bab3d5a2407c76cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export auth
export const auth = getAuth(app);
