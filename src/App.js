import "./App.css";
import { app } from "./firebase";
import { getDatabase, set, ref } from "firebase/database";

function App() {
  const db = getDatabase(app);

  const userData = [
    {
      id: 1,
      name: "Soni Kumari",
      age: 21,
    },
    {
      id: 2,
      name: "Naina",
      age: 24,
    },
    {
      id: 3,
      name: "Ravi Sharma",
      age: 20,
    },
  ];

  function setData() {
    set(ref(db, "users"), {
      userData,
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
