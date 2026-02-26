import React, { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "25px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        switch to {dark ? "light" : "dark"} mode
      </button>
      <p>you are in {dark ? "Dark" : "Light"} mode</p>
    </div>
  );
}
