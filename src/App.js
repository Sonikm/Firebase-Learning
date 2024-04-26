import "./App.css";
import { app } from "./firebase";
import { getDatabase, set, ref } from "firebase/database";

function App() {
  const db = getDatabase(app);

  function setData() {
    set(ref(db, "users/soni"), {
      id: 1,
      name: "Soni Kumari",
      age: 21,
    });
  }

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <button onClick={() => setData()}>set data</button>
    </div>
  );
}

export default App;
