import React, { useState, useEffect } from "react";

export default function UseEffectAPI() {
  const [user, setUser] = useState([]);
  const [lodaing, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      // API data=[{},{},{},{},{},{},{},{},{},{}]----- raw data
      .then((res) => res.json())
      // API data=[{},{},{},{},{},{},{},{},{},{}]----- as object
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h1>User data List</h1>
      {lodaing ? (
        <p>loading...</p>
      ) : (
        <ul>
          {user.map((person) => (
            <li key={person.id}>
              {person.name}---{person.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
