import React, { useState } from "react";
import { useFirebase } from "../../contexts/Firebase";

function RealtimeDatabase() {
  // State variables to hold email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Access Firebase functionality using custom hook
  const firebase = useFirebase();

  // Function to sign up a user
  function signupUser(e) {
    e.preventDefault(); // Prevent default form submission behavior
    // Call Firebase functions to sign up the user and store signup info
    firebase.signupUserWithEmailAndPassword(email, password);
    firebase.putData("user/signupInfo", {
      email: email,
      password: password,
    });
    // Clear input fields after submission
    setEmail("");
    setPassword("");
  }

  function putNewData() {
    // firebase.putData('root/a/b', {id: 1});
   firebase.putData("grandfather/father/child", {
      id: 1,
      name: "Soni Kumari",
    });

  }

  return (
    <form onSubmit={signupUser}>
      {/* Form submission triggers signupUser function */}
      <h1>Firebase</h1>
      <p>{}</p>
      <div>
        <label>Email: </label>
        {/* Input field for email */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email.."
          required
        />
      </div>
      <div>
        <label>Password: </label>
        {/* Input field for password */}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password.."
          required
        />
      </div>
      <button type="submit">Signup</button> {/* Button to submit the form */}
      <button onClick={putNewData}>Add New Data</button>
    </form>
  );
}

export default RealtimeDatabase;
