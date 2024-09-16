import React from "react";
import "./App.css";
import { Counter } from "./components/hooks/Counter";

function App() {
  const [counter, increase, decrease] = Counter();
  return (
    <div className="App">
      <button onClick={increase}>+</button>
      <h1>{counter}</h1>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
