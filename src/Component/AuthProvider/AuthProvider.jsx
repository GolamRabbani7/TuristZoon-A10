import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../FireBase/firebase.config";




export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
const [user, setUser]=useState(null);
const [lodding,setLoding]=useState(true);


    // signInWithPopup All Provuder
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider()
    const UserCreat = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logInWithGoogle = () => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub = () => {
        setLoding(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    // Manage User
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            setLoding(false)
        }
    });



    const authInfo = {
        UserCreat,
        loginUser,
        logInWithGoogle,
        loginWithGithub,
        user,
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;