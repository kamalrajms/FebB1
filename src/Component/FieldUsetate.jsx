import React, { useState } from "react";

export default function FieldUsetate() {
  const [name, setName] = useState("kamal");
  console.log(name);
  const [ischecked, setIsChecked] = useState(true);
  console.log(ischecked);
  

  //   const [isC]
  return (
    <div>
      <h2>Controlled text</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>check box</h2>
      <input
        type="checkbox"
        checked={ischecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
    </div>
  );
}
