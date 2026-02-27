import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [num, setnum] = useState(0);

  useEffect(() => {
    console.log("component mounted");
  }, []);
  useEffect(() => {
    console.log(`count changes to : ${count}`);
  }, [num, count]);

  return (
    <div>
      <h2>UseEffect</h2>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setnum(num - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
