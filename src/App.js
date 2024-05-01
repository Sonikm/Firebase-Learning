import React, { useState } from "react";
import RealtimeDatabase from "./features/realtime_database/RealtimeDatabase";

function App() {
  
  return (
    <div className="app">
      {/* <h2>Firebase Firestore</h2> */}
       {/* <CloudFirestore/> */}
       <RealtimeDatabase/>
    </div>
  );
}

export default App;
