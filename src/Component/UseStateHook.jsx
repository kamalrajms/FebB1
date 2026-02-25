import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
