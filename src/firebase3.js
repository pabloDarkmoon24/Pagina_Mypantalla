import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3LuSfEHG3Y931aFrRt2Rio2wrGp4pCcM",
  authDomain: "mypantalla-73d92.firebaseapp.com",
  projectId: "mypantalla-73d92",
  storageBucket: "mypantalla-73d92.firebasestorage.app",
  messagingSenderId: "1034428914449",
  appId: "1:1034428914449:web:ad5d22c8d2acf5d323cab0"
};

// ✅ Inicializar Firebase solo si no existe esta instancia
const app =
  getApps().find(app => app.name === 'appComando') ||
  initializeApp(firebaseConfig, 'appComando');

const db = getFirestore(app);

export { db };