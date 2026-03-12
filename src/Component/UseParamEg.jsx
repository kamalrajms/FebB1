import React, { useState, useEffect } from "react";
import { data, Link } from "react-router-dom";

export default function UseParamEg() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
        {/* array=[{},{},{},{}....] */}
      <h1>user Name List</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/Blogs/${user.email}`}>
              {user.id}.{user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
