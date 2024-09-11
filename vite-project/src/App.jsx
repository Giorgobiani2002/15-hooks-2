import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = ()=>{
    setCount((prev)=>prev+1);
  }
  return (

    <>
    <h1>{count}</h1>
    <button onClick={handleIncrement}> click</button>
    </>
  )
    
  
 
}

export default App;
