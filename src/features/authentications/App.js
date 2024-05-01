// import "./App.css";
// import SignupPage from "./features/authentications/SignupPage";
// import FirebaseSetup from "./features/authentications/FirebaseSetup";
// import SigninPage from "./features/authentications/SigninPage";
// import CorrectWaysToUseFirebase from "./features/authentications/CorrectWaysToUseFirebase";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { app } from "./firebase";
// import { useEffect, useState } from "react";

// const auth = getAuth(app);

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
        // Yes your are logged in
//         setUser(user);
        // console.log(user.email)
        // console.log(user.uid)
        // console.log(user.displayName)
//       } else {
//         console.log("You are logged out");
//         setUser(null);
//       }
//     });
//   }, []);

//   if (user === null)
//     return (
//       <div className="App">
//         {/* <FirebaseSetup/> */}
//         <SignupPage />
//         {/* <SigninPage/> */}
//         {/* <CorrectWaysToUseFirebase/> */}
//       </div>
//     );

//   return (
//     <div className="App">
//       <h2>Hello {user.email}</h2>
//       <button onClick={() => signOut(auth)}>Loggout</button>
//     </div>
//   );
// }

// export default App;
