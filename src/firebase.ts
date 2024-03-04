// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeKucV-HKgoZPadYZVdT20uoG3r4CZWtg",
  authDomain: "newitter-reloaded.firebaseapp.com",
  projectId: "newitter-reloaded",
  storageBucket: "newitter-reloaded.appspot.com",
  messagingSenderId: "851552351471",
  appId: "1:851552351471:web:2b5f6944a8a0091c65571a",
  measurementId: "G-DF1QN8Y5GX",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export const auth = getAuth(app)

export const storage = getStorage(app)

export const db = getFirestore(app)
