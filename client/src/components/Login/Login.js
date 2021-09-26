import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/Firebase.Config';
import googleLogo from '../../images/google.png';
import logo from '../../images/navLogo.svg';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

function Login() {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        success: false
    });
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    // Sign in section
    const handleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                const user = res.user;
                const { displayName, email, photoURL } = user;
                const signIn = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(signIn);
                setLoggedInUser(signIn);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }
    // Sign out section
    const handleSignOut = () => {
        firebase.auth().signOut().then(res => {
            const signOut = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                error: ''
            };
            setUser(signOut);
        }).catch(error => {
            // An error happened.
        });
    }

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="py-2">
                    <Link to="/">
                        <img src={logo} alt="" width="120px" />
                    </Link>
                </div>
                <h4>Event Photography</h4>
                <div className="login-area border p-5 rounded d-flex flex-column align-items-center">
                    <h3 className="font-weight-bold mb-3">Login With</h3>
                    <button className="login-button mb-3 px-5 py-2" onClick={handleSignIn}>
                    <img src={googleLogo} alt="" width="16px" className="mr-2"/>Continue with Google
                    </button>
                    <p><small className='text-muted'>Don't have an account? <a href="/login">Create an account.</a></small></p>
                </div>
            </div>
        </main>
    );
}

export default Login;