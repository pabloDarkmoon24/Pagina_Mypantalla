import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbPNLmZeBjB96DWvngkqR96upDExCJ_fE",
  authDomain: "ruleta-mypantalla.firebaseapp.com",
  projectId: "ruleta-mypantalla",
  storageBucket: "ruleta-mypantalla.firebasestorage.app",
  messagingSenderId: "140750321631",
  appId: "1:140750321631:web:4952830d49b928820b766a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);