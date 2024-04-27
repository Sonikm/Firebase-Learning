import { app } from "../firebase";
import { getDatabase, set, ref } from "firebase/database";
import { userData } from "../utils/constants";

function FirebaseSetup() {
  const db = getDatabase(app);

  function setData() {
    // set(ref(db, "users/soni"), {
    //   id: 1,
    //   name: "Soni Kumari",
    //   age: 21,
    // });

    set(ref(db, "users"), userData);
  }

  return (
    <div className="App">
      <h2>Firebase React App</h2>
      <button onClick={() => setData()}>set data</button>
    </div>
  );
}

export default FirebaseSetup;
