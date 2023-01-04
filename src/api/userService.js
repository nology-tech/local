import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { auth, db } from "../firebase";

export const registerUser = async (
  email,
  password,
  firstName,
  lastName,
  username
) => {
  const auth = getAuth();

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const docRef = doc(db, "users", user.uid);

    await setDoc(docRef, {
      id: auth.currentUser.uid,
      firstName,
      lastName,
      username,
      email,
      favourites: [],
    });
  } catch ({ code, message }) {
    console.error(`Error code: ${code}. Error message: ${message}`);
  }
};

export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log({ error });
  }
};
