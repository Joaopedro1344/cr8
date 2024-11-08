import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGub-hFx15UgCh7uKxpTtDZClUU_hNXy8",
  authDomain: "limao-145ad.firebaseapp.com",
  projectId: "limao-145ad",
  storageBucket: "limao-145ad.firebasestorage.app",
  messagingSenderId: "100296740631",
  appId: "1:100296740631:web:14a1ee0d48195794173152",
  measurementId: "G-V205W1CEM3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const collectionRef = collection(db, "produtos");

const data = [];
console.log("caindo");

async function getAll() {
  try {
    const res = await getDocs(collectionRef);

    const data = res.docs.map((item) => ({
      ...item.data(),
    }));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAll();