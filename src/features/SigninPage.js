import React, { useState } from "react";
import {signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import { app } from "../firebase";


const auth = getAuth(app);

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signInUser(e){
   e.preventDefault();
   signInWithEmailAndPassword(auth,email, password).then((val) => {
    console.log("SignIn successfully");
    setEmail('')
    setPassword('')
   }).catch((err) => {
    console.log(err);
   })
  }

  return (
    <form className="form" onSubmit={signInUser} >
      <h2>SigninPage via email and password</h2>
      <div>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="enter your email here ..."
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          required
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default SigninPage;
