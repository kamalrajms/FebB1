import React, { useState, useCallback } from "react";
import CallBackChild from "./CallBackChild";

export default function CallbackHook() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //   const getItems = () => {
  //     return [number, number + 1, number + 2, number + 3];
  //   };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2, number + 3];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "20px",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Theme</button>
      <CallBackChild getItems={getItems} />
    </div>
  );
}
