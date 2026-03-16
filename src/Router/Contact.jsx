import React from "react";
import useIncrement from "../Component/useIncrement";

export default function Contact() {
  const { count, increment, decrement, reset } = useIncrement(10);
  return (
    <div>
      <h2>Contact component</h2>
      <h3>Count:{count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
