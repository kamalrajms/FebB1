import React, { useState } from "react";
import ChildCallBack from "./ChildCallBack";

export default function UseCallBackHook() {
  //   const [count, setCount] = useState(0);
  //   const handleClick = () => {
  //     console.log("Clicked");
  //   };

  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Hello everyone");
  };

  return (
    <div>
      {/* <h2>{count}</h2>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => setCount(count + 1)}>increment</button> */}
      <h2>{count}</h2>
      <ChildCallBack onclick={handleClick} />
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
