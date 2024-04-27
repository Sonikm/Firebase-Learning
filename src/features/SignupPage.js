import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signupUser(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((val) => {
        console.log("Your are signUp now");
        setEmail('')
        setPassword('')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form className="form" onSubmit={signupUser}>
      <h2>SignupPage via email and password</h2>
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

export default SignupPage;
