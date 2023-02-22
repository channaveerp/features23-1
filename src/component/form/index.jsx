import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import style from "./index.module.css";

const Contactus = () => {
  const [inputData, setinputData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    jobtitle: "",
    organization: "",
    weblink: "",
    comment: "",
    purpose: "",
  });
  // console.log('purpose', inputData.purpose);
  const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinputData({ ...inputData, [name]: value });
  };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  const validation = (value) => {
    console.log("value:", value);
    const errors = {};
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.firstname) {
      errors.firstname = "First name is required!";
    }
    if (!value.lastname) {
      errors.lastname = "Last name is required!";
    }
    if (!value.email) {
      errors.email = "Email is required!";
    } else if (!reg.test(value.email)) {
      errors.email = "Not valid email!";
    }

    if (value.phone === "") {
      errors.phone = "Phone number required!!";
    } else if (value.phone.length <= 9) {
      errors.phone = "Not a valid phone number!!";
    } else if (value.phone.length > 10) {
      errors.phone = "Phone number not more then 10 digit!";
    }
    if (!value.organization) {
      errors.organization = "Organization is required!";
    }
    if (!value.jobtitle) {
      errors.jobtitle = "Job title is required!";
    }
    if (!value.weblink) {
      errors.weblink = "Weblink is required!";
    }
    if (!value.type) {
      errors.type = "Type of business is required!";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validation(inputData));
    setIssubmit(true);
    console.log("submit1", isSubmit);
    if (
      inputData.firstname &&
      inputData.phone &&
      inputData.phone.length === 10 &&
      inputData.email &&
      inputData.jobtitle &&
      inputData.organization
    ) {
      let payload = [
        {
          Attribute: "FirstName",
          Value: inputData.firstname,
        },
        {
          Attribute: "LastName",
          Value: inputData.lastname,
        },
        {
          Attribute: "EmailAddress",
          Value: inputData.email,
        },
        {
          Attribute: "mx_Organization_Name",
          Value: inputData.organization,
        },
        {
          Attribute: "JobTitle",
          Value: inputData.jobtitle,
        },
        {
          Attribute: "Mobile",
          Value: inputData.phone,
        },
        {
          Attribute: "Website",
          Value: inputData.weblink,
        },
        {
          Attribute: "Notes",
          Value: inputData.comment,
        },
        {
          Attribute: "mx_Type",
          Value: inputData.purpose,
        },
        {
          Attribute: "Source",
          Value: "AjnaLens Contact us",
        },
      ];
      axios.post("api", payload);
      setinputData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        jobtitle: "",
        organization: "",
        weblink: "",
        comment: "",
        purpose: "",
      });
      Swal.fire("Form submitted succesfully");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("input", inputData);
    }
  }, [formErrors]);
  // console.log('input', inputData);
  console.log("submit2", isSubmit);

  return (
    <div className={style.container}>
      <div className={style.contactTxt}>
        <div>
          <span>Contact us</span>
          <div>For More Info</div>
        </div>
      </div>
      <form>
        <div className={style.labelInputCont}>
          <div className={style.labelInput}>
            <label htmlFor="">First Name*</label>
            <input
              type="text"
              name="firstname"
              value={inputData.firstname}
              onChange={handleChange}
              autoComplete="off"
            />
            <p style={{ color: "red" }}>{formErrors.firstname}</p>
          </div>
          <div className={style.labelInput}>
            <label htmlFor="">Last Name*</label>
            <input
              type="text"
              name="lastname"
              value={inputData.lastname}
              onChange={handleChange}
              autoComplete="off"
            />
            <p style={{ color: "red" }}>{formErrors.lastname}</p>
          </div>
          <div className={style.labelInput}>
            <label htmlFor="">Business Email*</label>
            <input
              type="text"
              name="email"
              value={inputData.email}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.email}</p>
          </div>
          <div className={style.labelInput}>
            <label htmlFor="">Organization Name*</label>
            <input
              type="text"
              name="organization"
              value={inputData.organization}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.organization}</p>
          </div>
          <div className={style.labelInput}>
            <label htmlFor="">Job Title*</label>
            <input
              type="text"
              name="jobtitle"
              value={inputData.jobtitle}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.jobtitle}</p>
          </div>
          <div className={style.labelInput}>
            <label htmlFor="">Contact Number*</label>
            <input
              type="text"
              name="phone"
              value={inputData.phone}
              onChange={handleChange}
              maxLength="10"
            />
            <p style={{ color: "red" }}>{formErrors.phone}</p>
          </div>
          <div className={style.labelInput1}>
            <label htmlFor="">Website Link Here*</label>
            <input
              type="text"
              name="weblink"
              value={inputData.weblink}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.weblink}</p>
          </div>
          <div className={style.types}>
            <div>Type</div>
            <div className={style.typesContetnt}>
              <div className={style.radio}>
                <input
                  type="radio"
                  name="purpose"
                  value="support"
                  id="support"
                  onChange={handleChange}
                  checked={inputData.purpose === "support"}
                />
                <label htmlFor="support">support</label>
              </div>
              <div className={style.radio}>
                <input
                  type="radio"
                  name="purpose"
                  id="business_enquiry"
                  value="business_enquiry"
                  checked={inputData.purpose === "business_enquiry"}
                  onChange={handleChange}
                />
                <label htmlFor="business_enquirey">Business enquiry</label>
              </div>
              <div className={style.radio}>
                <input
                  type="radio"
                  name="purpose"
                  id="partnership"
                  value="partnership"
                  checked={inputData.purpose === "partnership"}
                  onChange={handleChange}
                />
                <label htmlFor="partnership">Partnership</label>
              </div>
              <div className={style.radio}>
                <input
                  type="radio"
                  name="purpose"
                  id="others"
                  value="others"
                  checked={inputData.purpose === "others"}
                  onChange={handleChange}
                />
                <label htmlFor="others">Others</label>
              </div>
            </div>
          </div>
          <div className={style.purposeArea}>
            <label htmlFor="">Mention your purpose below*</label>
            <textarea
              className={style.commentArea}
              name="comment"
              value={inputData.comment}
              onChange={handleChange}
              placeholder="Write your message here..."
            ></textarea>
          </div>
        </div>
        <div className={style.btn}>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
