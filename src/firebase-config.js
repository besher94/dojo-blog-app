import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "dojo-blog-b3790",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MASSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
