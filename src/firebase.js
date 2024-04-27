import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "app-a4276.firebaseapp.com",
  projectId: "app-a4276",
  storageBucket: "app-a4276.appspot.com",
  messagingSenderId: "290492018416",
  appId: "1:290492018416:web:a2bbc46f64389efdf19c35",
  databaseURL: "https://app-a4276-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
