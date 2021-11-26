// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5F7rF-2f_bmf-Xj8998_LTva-89sw_Qo",
  authDomain: "angular-githubpages.firebaseapp.com",
  projectId: "angular-githubpages",
  storageBucket: "angular-githubpages.appspot.com",
  messagingSenderId: "703739320868",
  appId: "1:703739320868:web:175aecdbcfa46ebc72d6b1",
  measurementId: "G-HYRC593F8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getCities(db) {
        const citiesCol = collection(db, 'cities');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
      }
      