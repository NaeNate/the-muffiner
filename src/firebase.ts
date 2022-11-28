import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const app = initializeApp({
  apiKey: "AIzaSyD9dY_QDxUHh0CFr3xgoB-V6sUMuhRwL4c",
  authDomain: "the-muffiner.firebaseapp.com",
  projectId: "the-muffiner",
  storageBucket: "the-muffiner.appspot.com",
  messagingSenderId: "1009473704322",
  appId: "1:1009473704322:web:8ca905d5dc64449135bf9b",
})

export const db = getFirestore(app)
export const auth = getAuth(app)
