import React, { useState, useEffect, useContext, createContext } from 'react';
import { getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebase from './firebase'; //DO-NOT-REMOVE

const authContext = createContext();
const auth = getAuth();
const provider = new GithubAuthProvider();

function useProvideAuth() {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const signinWithGitHub = async () => {
      setLoading(true);
      const response = await signInWithPopup(auth, provider);
      setUser(response.user);
      return response.user;
   };

   const signout = async () => {
      await signOut(auth);
      setUser(null);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(
         auth,
         (user) => {
            if (user) {
               setUser(user)
            } else {
               setUser(null)
            }
         }
      );
      return () => unsubscribe();
   }, []);

   return {
      user,
      loading,
      signinWithGitHub,
      signout
   };
};

export function ProvideAuth({ children }) {
   const auth = useProvideAuth();
   return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
   return useContext(authContext);
};
