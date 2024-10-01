import { auth } from "./Firebaseconfig";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const docreateuseremailandpassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signinusingemailandpassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const signinusinggoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // result.user
  return result;
};

export const signout = () => {
  return auth.signOut();
};
