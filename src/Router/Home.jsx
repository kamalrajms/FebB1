import React, { useState, useEffect } from "react";
import UseParamEg from "../Component/UseParamEg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [count, setCount] = useState(1);
  const page = useNavigate();

  useEffect(() => {
    if (count == 10) {
      page("/Contact");
    }
  }, [count]);

  return (
    <div>
      <button onClick={() => page("/Contact")}>Move to contact</button>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <h2>home component</h2>
      <UseParamEg />
    </div>
  );
}
