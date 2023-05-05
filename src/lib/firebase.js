import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBpXKdUJgblznvYiWOu96KPPWqkeUuoEH4",
    authDomain: "academy-managment.firebaseapp.com",
    projectId: "academy-managment",
    storageBucket: "academy-managment.appspot.com",
    messagingSenderId: "573989190453",
    appId: "1:573989190453:web:0a43a73365694e4df26a7c"
};

export const firebaseApp = initializeApp(firebaseConfig);