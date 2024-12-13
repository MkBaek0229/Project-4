import firebasedb from "./firebasedb.js";
import { getFirestore } from "firebase/firestore";

const firestore = getFirestore(firebasedb.firebaseApp);

export default firestore;
