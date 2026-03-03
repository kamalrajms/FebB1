import React, { useContext } from "react";
import { Pass } from "../App";

export default function ContextButton() {
  const { mode, setMode } = useContext(Pass);
  return (
    <div>
      <button onClick={() => setMode(mode === "light" ? "black" : "light")}>
        Theme--{mode}
      </button>
    </div>
  );
}
