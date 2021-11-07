import React, { createContext, useContext, useEffect, useState } from 'react';

import { app } from '../services/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import avatarImg from '../assets/avatar.png';

interface IAuthContext {
   user: IUser,
   signInWithGoogle: () => Promise<boolean>;
   signOutWithGoogle: () => Promise<boolean>;
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
               avatar: photoURL ? photoURL : avatarImg
            })
         }
      });

      return () => {
         unsubscribe();
      }
   }, [auth]);

   async function signInWithGoogle() {

      const provider = new GoogleAuthProvider();
      return await signInWithPopup(auth, provider)
         .then((result) => {
            const user = result.user;
            if (user){
               const { photoURL, uid } = user;
               setUser({
                  id: uid,
                  avatar: photoURL ? photoURL : avatarImg
               })
               return true;
            }
            return false;
               
         }).catch(() => {
            setUser({
               id: '',
               avatar: avatarImg
            })
            return false;
         });
   }

   async function signOutWithGoogle(){
      return await signOut(auth).then(() => {
         setUser({
            id: '',
            avatar: avatarImg
         });
         return true;
       }).catch(() => {
         setUser({
            id: '',
            avatar: avatarImg
         })
         return false;
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