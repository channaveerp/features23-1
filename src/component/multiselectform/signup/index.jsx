import React from "react";
import style from "./index.module.css";

const Signup = ({ formData,handleChange }) => {
 
  return (
    <div className={style.container}>
      {" "}
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
    </div>
  );
};

export default Signup;
