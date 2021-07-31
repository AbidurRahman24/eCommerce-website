import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import FacebookLogin from './FacebookLogIn';
import EmailPassword from './EmailPassword';

// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const LogIn = () => {
    
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    })
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                console.log(res.user)
                setUser(signedInUser);
                history.replace(from)

            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setUser(signedOutUser);
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <div style={{textAlign:'center'}}>
            <h1>This is log in page</h1>
            {user.isSignedIn ? <button onClick={handleSignOut}>Sign Out with Google</button> :
                <button onClick={handleSignIn}>Sign In with Google</button>
            }
            {
                user.isSignedIn && <div>
                    <p>Welcome, {user.name}!</p>
                    <p>Your email: {user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            }
            <FacebookLogin></FacebookLogin>
            <EmailPassword></EmailPassword>
        </div>
    );
};

export default LogIn;