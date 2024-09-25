import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuHoBYcH3HKOTr2FingqmVKjm0Tl5zMVc",
  authDomain: "lab2sao.firebaseapp.com",
  projectId: "lab2sao",
  storageBucket: "lab2sao.appspot.com",
  messagingSenderId: "957559827905",
  appId: "1:957559827905:web:f2073d4133b6e8acf4d340",
  measurementId: "G-NRX162QP6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const firestore = getFirestore(app);

export { auth, firestore };
