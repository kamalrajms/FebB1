import React,{useContext} from "react";
import ContextFields from "./ContextFields";
import { Pass } from "../App";

export default function ContextForm() {
    const {mode}=useContext(Pass)
  return (
    <div className={mode}>
      <h2>UseContext Reg form</h2>
      <ContextFields />
    </div>
  );
}
