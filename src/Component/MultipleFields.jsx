import React, { useState } from "react";

export default function MultipleFields() {
  const [formData, setFormData] = useState({
    name: "kdhd",
    email: "",
    age: "",
  });
  const handleInput = (e) => {
    const {name,value}=e.target
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Multiple fields</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInput}
        placeholder="enter a name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInput}
        placeholder="enter a email"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleInput}
        placeholder="enter a age"
      />
    </div>
  );
}

// formdata={
//     name: "",
//     email: "",
//     age: "",
//   }

// console.log(formData.name);
