import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(true);

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
      <nav>
        {user ? <p>welcome back....</p> : <p>Pleasc login</p>}
        {user && (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            sapiente maiores perspiciatis expedita ducimus fugit voluptatum. Rem
            ab, error odit ut libero rerum architecto eveniet aspernatur
            eligendi? Recusandae, voluptate deleniti.
          </p>
        )}
        <button onClick={() => setUser(!user)}>
          sign {user ? "Out" : "in"}
        </button>
      </nav>
    </div>
  );
}

// !true===false
// !false===true
