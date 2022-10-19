import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update, set, remove } from 'firebase/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBg_mjb-096aLiZBvTfJIsN4lEoqDJyBlU",
    authDomain: "sharedspaces-nu.firebaseapp.com",
    projectId: "sharedspaces-nu",
    storageBucket: "sharedspaces-nu.appspot.com",
    messagingSenderId: "400085192932",
    appId: "1:400085192932:web:0365cb5fe69ffb12dc5cf1",
    measurementId: "G-47V8P9VHDB"
  };

  // Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const setData = (path, value) => (
  set(ref(database, path), value)
);

export const removeData = (path)=>{

  remove(ref(database,path)).then(
    ()=>{
      console.log("removed");
    }
  ).catch((err)=>{
    console.log("remove failed");
  })

}

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
  
    return [ data, error ];
  };

  const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
  };
  
  export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
  
    return [updateData, result];
  };


//login
export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ));

  return [user];
};

export const getUserInfo = ()=>{

  // console.log(getAuth(firebase).currentUser.displayName);
  return getAuth(firebase).currentUser.displayName;
}
