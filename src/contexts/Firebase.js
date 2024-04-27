// Import necessary functions and modules from React and Firebase
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import { userData } from "../utils/constants"; // Assuming this contains some user data constants

// Firebase configuration object containing your app's credentials
const firebaseConfig = {
    apiKey: 'AIzaSyBLh3tC1gaMUSZie1YbH4fn9JxozgcXXAY',
    authDomain: "app-a4276.firebaseapp.com",
    projectId: "app-a4276",
    storageBucket: "app-a4276.appspot.com",
    messagingSenderId: "290492018416",
    appId: "1:290492018416:web:a2bbc46f64389efdf19c35",
    databaseURL: "https://app-a4276-default-rtdb.firebaseio.com",
  };

// Initialize Firebase app with the provided configuration
const firebaseApp = initializeApp(firebaseConfig);

// Get authentication instance from Firebase app
const firebaseAuth = getAuth(firebaseApp);

// Get database instance from Firebase app
const database = getDatabase(firebaseApp);

// Create a context to hold Firebase functionality
const FirebaseContext = createContext(null);

// Custom hook to access Firebase context
export const useFirebase = () => useContext(FirebaseContext);

// Firebase provider component to wrap around your app
export const FirebaseProvider = (props) => {
  // Function to sign up a user with email and password
  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((val) => {
        console.log('Signup successful...');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to put data into the Firebase database
  const putData = (key, data) => {
    set(ref(database, key), data);
  };

  // Provide the signup and data insertion functions through context
  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData }}
    >
      {props.children} {/* Render children components */}
    </FirebaseContext.Provider>
  );
};
