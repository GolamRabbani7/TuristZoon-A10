import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../FireBase/firebase.config";




export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
const [user, setUser]=useState(null)


    // signInWithPopup All Provuder
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider()
    const UserCreat = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    // Manage User
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
    });



    const authInfo = {
        UserCreat,
        loginUser,
        logInWithGoogle,
        loginWithGithub,
        user

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;