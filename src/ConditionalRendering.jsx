import React from "react";
import "./ConditionalRendering.css";

export default function ConditionalRendering() {
  const user = false;
  return (
    <div className="conditional">
      <h2 style={{ color: "#fff", backgroundColor: "red" }}>
        conditional rendering
      </h2>
      {user ? <p>welcome back</p> : <p>pleace login</p>}
      <h2>logical operator</h2>
      {user && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          minima nostrum commodi voluptate ullam ducimus itaque iste! Dolore id
          in hic itaque eligendi, aliquid similique, repudiandae quo quis eum
          quibusdam?
        </p>
      )}
    </div>
  );
}
