import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Get the Firebase config from the auto generated file.
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIsln7M7zdu21FZt2o-y0OtwLwgkVbQxw",
    authDomain: "hpms-palak.firebaseapp.com",
    databaseURL: "https://hpms-palak.firebaseio.com",
    projectId: "hpms-palak",
    storageBucket: "hpms-palak.appspot.com",
    messagingSenderId: "449612362029",
    appId: "1:449612362029:web:5d444ef0fe4020bcfce3a4",
    measurementId: "G-ZY5JX1DQLL"
};

// Instantiate a Firebase app.
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /. after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/.',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ]
};


class Login extends React.Component {

    

    render(){
        return(
            <div>
                <div class="marqee">
                   <li class="list-inline">
                        COVID-19 Helpline: 011-42253001, 011-42253002, 011-42253003, +91-9818840984, +91-9311407392, 9311407393
                   </li>
                </div>
                <br/>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()}/>
            </div>
        )
    }
}
export default Login;