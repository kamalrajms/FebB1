import React from "react";

export default function DestructuringProps({ Fullname, address, phone }) {
  return (
    <div>
      <h3>name:{Fullname}</h3>
      <h3>city:{address}</h3>
      <h3>number:{phone}</h3>
    </div>
  );
}
