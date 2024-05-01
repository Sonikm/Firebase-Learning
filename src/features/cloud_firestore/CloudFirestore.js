import React, { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import { app } from "../../firebase";

const firestore = getFirestore(app);

function CloudFirestore() {
  const [cityName, setCityName] = useState("");
  const writeData = async () => {
    try {
      await addDoc(collection(firestore, "cities"), {
        cityName: cityName,
        pinCode: 263,
        lat: 2987,
        long: 63452,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, "cities/wE7wN9V2j4iBjmjvQCJg/places"), {
      name: "This is a place 2",
      desc: "A Desc",
      date: Date.now(),
    });
  };

  const readData = async () => {
    const docRef = doc(firestore, "users", "mOqGx46LU1pZnbfJZTUr");
    const snap = await getDoc(docRef);
    console.log(snap.data());
  };

  const getDocumentsByQuery = async () => {
    const collectionRef = collection(firestore, "users");
    const q = query(collectionRef, where("isFemale", "==", true));

    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()));
  };

  const update = async () => {
    const docRef = doc(firestore, "cities", "wE7wN9V2j4iBjmjvQCJg");
    await updateDoc(docRef, {
      cityName: "New Mumbai",
      famousFor: "Bollywood",
      pinCode: deleteField(), // will delete this field
    });
  };

  return (
    <div className="app">
      <input
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        type="text"
        placeholder="City Name"
      />
      <br />
      <button onClick={writeData}>Add Data</button>
      <br />
      <button onClick={makeSubCollection}>Add Sub Collection</button>
      <br />
      <button onClick={readData}>Read Data</button>
      <br />
      <button onClick={getDocumentsByQuery}>Read Document by Query</button>
      <br />
      <button onClick={update}>Update Document</button>
    </div>
  );
}

export default CloudFirestore;
