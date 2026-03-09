import React, { useState, useEffect } from "react";

export default function CallBackChild({ getItems }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    console.log("updating items");

    setItem(getItems());
  }, [getItems]);
  return (
    <div>
      {item.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
