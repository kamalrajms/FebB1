import React from "react";

export default function ChildCallBack({ onclick }) {
  console.log("Child render");

  return <button onClick={onclick}>Click</button>;
}
