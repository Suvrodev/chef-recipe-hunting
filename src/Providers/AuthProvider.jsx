import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null);
const auth=getAuth(app)

const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true)
   const [user,setUser]=useState("")

    //Sign in by Google start
    const googleProvider=new GoogleAuthProvider();
    const createUserByGoogle=()=>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider)
    }
    //Sign in by Google end

    ///Sign in By Github start
    const githubProvider=new GithubAuthProvider();
    const createUserByGithub=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }
    ///Sign in By Github end


    //Register by email start
    const createUserByEmail=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //Register by email end

    //Login By Email start
    const loginByEmail=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //Login By Email end


    // Logout Start
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    // Logout end

    ///Check user logged or not start
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            // console.log("Check from useEffect")
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe();
        }

    },[])
    ///Check user logged or not end

    
    const authInfo={
        user,
        createUserByGoogle,
        createUserByGithub,
        createUserByEmail,
        loginByEmail,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;