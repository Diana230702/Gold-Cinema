import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC_flhjigDIsVRApiAYHGbwWHxCmPIGk9M",
  authDomain: "cinema-maneger.firebaseapp.com",
  projectId: "cinema-maneger",
  storageBucket: "cinema-maneger.appspot.com",
  messagingSenderId: "533403512506",
  appId: "1:533403512506:web:7c7a583f54cac6de4a1c83",
  measurementId: "G-ET85HK8MMV",
};
const fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(fire);
