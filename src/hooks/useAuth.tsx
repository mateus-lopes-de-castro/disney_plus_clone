import React, { createContext, useContext, useEffect, useState } from 'react';

import { app } from '../services/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import avatarImg from '../assets/avatar.png';

interface IAuthContext {
   user: IUser,
   signInWithGoogle: () => Promise<void>;
   signOutWithGoogle: () => Promise<void>;
}
interface IUser {
   id: string;
   avatar: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {

   const [user, setUser] = useState<IUser>({} as IUser);
   const auth = getAuth(app);

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
         if (user) {
            const { photoURL, uid } = user;
           
            setUser({
               id: uid,
               avatar: photoURL ? avatarImg : avatarImg
            })
         }
      });

      return () => {
         unsubscribe();
      }
   }, [auth]);

   async function signInWithGoogle() {

      const provider = new GoogleAuthProvider();
      const res = signInWithPopup(auth, provider)
         .then((result) => {
            const user = result.user;
            if (user){
               const { photoURL, uid } = user;
               setUser({
                  id: uid,
                  avatar: photoURL ? avatarImg : avatarImg
               })
            }
               
         }).catch(() => {
            setUser({
               id: '',
               avatar: avatarImg
            })
         });
   }

   async function signOutWithGoogle(){
      signOut(auth).then(() => {
         setUser({
            id: '',
            avatar: avatarImg
         });
       }).catch(() => {
         setUser({
            id: '',
            avatar: avatarImg
         })
      });
   }

   return (
      <AuthContext.Provider value={{ user, signInWithGoogle, signOutWithGoogle }}>
         {children}
      </AuthContext.Provider>
   );
}

function useAuth(): IAuthContext {
   const context = useContext(AuthContext);
   return context;
}

export { AuthProvider, useAuth }