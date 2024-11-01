// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxx6tGlj_ANkMjuiV_zrK_S7exda-GajY",
  authDomain: "astronomical-adventure-f8e1e.firebaseapp.com",
  projectId: "astronomical-adventure-f8e1e",
  storageBucket: "astronomical-adventure-f8e1e.firebasestorage.app",
  messagingSenderId: "829225574782",
  appId: "1:829225574782:web:0f4c70693046192d0e132f"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

export {
    app,
    auth
}