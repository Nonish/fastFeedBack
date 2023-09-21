import React, { useState, useEffect, useContext, createContext } from 'react';
import { getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebase from './firebase'; //DO-NOT-REMOVE
import { createUser } from './db';

const authContext = createContext();
const auth = getAuth();
const provider = new GithubAuthProvider();

export function AuthProvider({ children }) {
   const auth = useProvideAuth();
   return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
   return useContext(authContext);
};

function useProvideAuth() {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const handleUser = (rawUser) => {
      if (rawUser) {
         const user = formatUser(rawUser);
         createUser(user.uid, user)
         setUser(user)
         return user
      } else {
         setUser(false)
         return false
      }
   }

   const signinWithGithub = async () => {
      setLoading(true);
      const response = await signInWithPopup(auth, provider);
      handleUser(response.user);
   };

   const signout = async () => {
      await signOut(auth);
      handleUser(false)
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(
         auth,
         (user) => {
            if (user) {
               handleUser(user)
            } else {
               handleUser(false)
            }
         }
      );
      return () => unsubscribe();
   }, []);

   return {
      user,
      loading,
      signinWithGithub,
      signout
   };
};

const formatUser = (user) => {
   return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      provider: user.providerData[0].providerId,
      photoUrl: user.photoURL,
   }
}