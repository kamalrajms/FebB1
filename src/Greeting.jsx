import React from "react";
import Good from "./Good";

export default function Greeting(props) {
  return (
    <div>
      <h2>React.js class --{props.Firstname}--{props.number}</h2>
      <Good />
    </div>
  );
}
