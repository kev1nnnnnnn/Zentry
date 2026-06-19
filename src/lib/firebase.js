import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBDwc7l_epw0z1VxFQ2pYqdz9AjyvTuA-E",
  authDomain: "agenciapamela.firebaseapp.com",
  projectId: "agenciapamela",
  storageBucket: "agenciapamela.appspot.com",
  messagingSenderId: "1073740081034",
  appId: "1:1073740081034:web:0f2191f2127e9876784a73",
};

// 🔥 Evita reinicialização (importante no Astro)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);