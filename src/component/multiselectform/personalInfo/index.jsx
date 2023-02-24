import React from "react";
import style from "./index.module.css";

const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="User Name"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
      />
    </div>
  );
};

export default PersonalInfo;
