import React, { useState } from "react";
import "./App.css"

function App2() {
  const [isOn, setIsOn] = useState(false);
  const toggleLight = () => {
    setIsOn((prev)=>!prev);
    console.log("hello")
  };
  return (
    <>
      <div className={`container ${isOn?"light-on":"light-off"}`}>
        <p>This light is {isOn?"ON":"OFF"}</p>
        <button onClick={toggleLight}>Turn  {isOn?"OFF":"ON"}</button>
      </div>
    </>
  );
}
export default App2;
