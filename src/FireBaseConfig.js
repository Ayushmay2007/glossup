import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCAMO-y2NoEXZKJIZANv40Gxc4uYLvmi78",
  authDomain: "glossup-nail.firebaseapp.com",
  projectId: "glossup-nail",
  storageBucket: "glossup-nail.firebasestorage.app",
  messagingSenderId: "680881188319",
  appId: "1:680881188319:web:9ea9861ae0c7df4959686a",
  measurementId: "G-BTCSXSDDTX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);