import firebase from "./firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firestore = getFirestore();

export function createUser(uid, data) {
   const getCollection = doc(firestore, "user", uid);
   return setDoc(
      getCollection, {
      uid,
      ...data
   },
      { merge: true });
}