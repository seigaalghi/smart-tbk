import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(e) {
    const value = e.target.value;
    if (value == "") {
      setNumber(value)
      return
    }
    if (!isNaN(parseInt(value))) {
      setNumber(parseInt(value, 10).toString());
    }
  }

  function handleSubmit() {
    if (number === "") return;
    const reversedNumber = parseInt(number.split("").reverse().join(""), 10);
    const difference = Math.abs(parseInt(number, 10) - reversedNumber);
    setResult(difference);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={number} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
