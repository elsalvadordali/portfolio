import {
    getAuth,
    setPersistence,
    signInWithEmailAndPassword,
    browserLocalPersistence
} from 'firebase/auth';
import { firebaseApp } from '$lib/firebase';


export const yogaLinks = [
    {url: 'https://www.youtube.com/embed/Rf0PYUcX3d8', start: 66, duration: 2065},
    {url: 'https://www.youtube.com/embed/usMHIuVJkAI', start: 43, duration: 1957},
    {url: 'https://www.youtube.com/embed/QwAIbYtt2K0', start: 125, duration: 2066},
    {url: 'https://www.youtube.com/embed/xZDDZnsVyx4', start: 15, duration: 943}, 
    {url: 'https://www.youtube.com/embed/TCoUnEPeuQk', start: 172, duration: 1631},
    {url: 'https://www.youtube.com/embed/VWIt7mVwbD0', start: 201, duration:1820},
    {url: 'https://www.youtube.com/embed/nmPl3QC95r0', start: 86, duration: 2790},
    {url: 'https://www.youtube.com/embed/Wsy2L9VvX90', start: 0, duration: 848},
    {url: 'https://www.youtube.com/embed/SL_bBhKKP6o', start: 12, duration: 1489},
    {url: 'https://www.youtube.com/embed/R69zNPYz0uM', start: 16, duration: 535},
    {url: 'https://www.youtube.com/embed/XKa-i2uaAlw', start: 5, duration: 2917 },
    {url: 'https://www.youtube.com/embed/SusCrvowaQM', start: 20, duration: 1421},
    {url: 'https://www.youtube.com/embed/QwAIbYtt2K0', start: 125, duration: 2066},
    {url: 'https://www.youtube.com/embed/usMHIuVJkAI', start: 43, duration: 1957},
]


export function authUser(e, user) {
    if (e) e.preventDefault();
    if (user.email && user.password) {
        setPersistence(auth, browserLocalPersistence).then(() => {
            return signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    user.isLoggedIn = true;
                    user.cred = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        });
    }
}

export function checkDate() {
    let checkedDate =
        //localStorage.getItem('date') !== null
        //? JSON.parse(localStorage.getItem('date'))
        //:
        new Date().valueOf();
    const SECONDS_IN_DAY = 86400;
    if (new Date().valueOf() - SECONDS_IN_DAY > checkedDate) {
        localStorage.setItem('date', JSON.stringify(new Date().valueOf()));
        tasks.forEach((task) => (task.timeLeft = 1500));
    }
}


