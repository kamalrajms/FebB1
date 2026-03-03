import React, { useContext } from "react";
import { Pass } from "../App";

export default function Third() {
  const Passname = useContext(Pass);
  return (
    <div style={{ border: "2px solid #000", padding: "20px" }}>
      <h2>Third component---{Passname}</h2>
    </div>
  );
}
