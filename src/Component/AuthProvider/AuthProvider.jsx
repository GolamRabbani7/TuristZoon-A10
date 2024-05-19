import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../../FireBase/firebase.config";




export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {



// signInWithPopup All Provuder
const googleProvider=new GoogleAuthProvider();
const gitHubProvider= new GithubAuthProvider()
    const UserCreat = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const loginWithGithub=()=>{
        return signInWithPopup(auth, gitHubProvider)
    }


    const authInfo = {
        UserCreat,
        loginUser,
        logInWithGoogle,
        loginWithGithub

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;