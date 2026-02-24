import React from "react";

export default function ConditionalRendering() {
  const user =false;
  return (
    <div>
      <h2>conditional rendering</h2>
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
