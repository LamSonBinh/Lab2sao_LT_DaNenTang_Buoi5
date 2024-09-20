// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA6_Ehkp5dP-5k3fB818lV_wiw9bV1nUBM",
    authDomain: "fir-authlsb.firebaseapp.com",
    projectId: "fir-authlsb",
    storageBucket: "fir-authlsb.appspot.com",
    messagingSenderId: "273938168672",
    appId: "1:273938168672:web:9db0ae2d3d84dcec86bc05",
    measurementId: "G-YR5X2NK006"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
