import React from "react";
import style from "./Destructuring.module.css";

export default function DestructuringProps({ Fullname, address, phone }) {
  return (
    <div className={style.destructure}>
      <h3>name:{Fullname}</h3>
      <h3>city:{address}</h3>
      <h3>number:{phone}</h3>
    </div>
  );
}
