import React from "react";
import useCustomAPI from "../Component/useCustomAPI";

export default function Service() {
  const {
    data: users,
    error,
    isLoading,
  } = useCustomAPI("https://jsonplaceholder.typicode.com/users");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;
  return (
    <div>
      <h2>Service component</h2>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: "2px solid #333", padding: "20px" }}
        >
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  );
}
