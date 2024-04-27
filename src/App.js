import "./App.css";
import SignupPage from "./features/SignupPage";
import FirebaseSetup from "./features/FirebaseSetup";
import SigninPage from "./features/SigninPage";

function App() {

  return (
    <div className="App">
      {/* <FirebaseSetup/> */}
      {/* <SignupPage/> */}
      <SigninPage/>
    </div>
  );
}

export default App;
