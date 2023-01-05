import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF6W8Jm9BMifqe_SFYzqd2uFjd1EQ4ky8",
  authDomain: "local-c70c0.firebaseapp.com",
  projectId: "local-c70c0",
  storageBucket: "local-c70c0.appspot.com",
  messagingSenderId: "574927605244",
  appId: "1:574927605244:web:8881f66078be938ded3679",
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// get auth and firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
