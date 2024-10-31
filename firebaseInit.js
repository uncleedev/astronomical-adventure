import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Initialize Firebase
const app = initializeApp();

GoogleSignin.configure({
    webClientId: "9466628787-jk5sfeoni7igqmfjetr84jmfc5gm9hpk.apps.googleusercontent.com",
});

export { auth, GoogleSignin };