import React from "react";

export default function Listrendering() {
  // eg1
  const friuts = ["apple", "banana", "mango", "orange", "banana"];
  console.log(friuts.length);

  //   eg2
  const user = [
    { id: 1, name: "john" },
    { id: 2, name: "hari" },
    { id: 3, name: "dhoni" },
  ];

  const theme = {
    backgroundColor: "green",
    color: "#fff",
    padding: "50px",
  };
  return (
    <div style={theme}>
      <h2>list Rendering</h2>
      {/* eg1 */}
      <h4>fruits data</h4>
      <ul>
        {friuts.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {/* eg2 */}
      <h4>user data</h4>
      {user.length > 0 ? (
        <ul>
          {user.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
}
// person= { id: 1, name: "john" }
// console.log(person.name);

// name="banana"
