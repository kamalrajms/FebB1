import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setErroe] = useState("");

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   const handleChange2=(e)=>{
  //     const{checked,name}=e.target;
  //     setFormData({
  //         ...formData,
  //         [name]:checked
  //     })
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.userName || !formData.email || !formData.password) {
      setErroe("All fields are required");
      return;
    }
    if (!formData.terms) {
      setErroe("You must accept the checkbox");
      return;
    }
    setErroe("");
    alert("Form is submitted successfully");
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registration form</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="">name</label>
        <input
          name="userName"
          type="text"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Enter a name"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter a email"
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter a Password"
        />
        <input
          name="terms"
          type="checkbox"
          checked={formData.terms}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
