import React, { useContext } from "react";
import ContextButton from "./ContextButton";
import { Pass } from "../App";

export default function ContextFields() {
  const { data } = useContext(Pass);
  return (
    <div>
      <input type="text" />
      <ContextButton />
    </div>
  );
}
