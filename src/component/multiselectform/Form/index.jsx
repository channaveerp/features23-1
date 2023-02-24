import React, { useState } from "react";
import Others from "../others";
import PersonalInfo from "../personalInfo";
import Signup from "../signup";
import style from "./index.module.css";

const MultistepForm = () => {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    nationality: "",
    userName: "",
    others: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

    const FormTitle = ["Sign up", "Personal Info", "Others"];
    
  const handleSubmit = (e) => {
    e.preventDefault();
      if (page === FormTitle.length - 1) {
        setFormData({...formData})
      alert("form submitted");
    } else {
      setPage(page + 1);
    }
  };

  console.log(formData);

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <form className={style.form}>
      <div className={style.progressbar}>
        <div
          style={{
            width: page == 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
            background: "red",
          }}
        >
          1
        </div>
      </div>
      <div className={style.container}>
        <div className={style.Header}>
          <h2>{FormTitle[page]}</h2>
        </div>
        <div className={style.body}>
          {page === 0 && (
            <Signup formData={formData} handleChange={handleChange} />
          )}
          {page === 1 && (
            <PersonalInfo formData={formData} handleChange={handleChange} />
          )}
          {page === 2 && (
            <Others formData={formData} handleChange={handleChange} />
          )}
        </div>
        <div className={style.footer}>
          <button disabled={page == FormTitle.length - 3} onClick={handlePrev}>
            Prev
          </button>
          <button onClick={handleSubmit} type="submit">
            {page === FormTitle.length - 1 ? "submit" : "Next"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MultistepForm;
