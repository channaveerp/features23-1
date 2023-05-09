import React, { useEffect, useState } from 'react';
import style from './Edit.module.css';
// import studentProfile from '../../../Assets/studentProfile.svg';
const Edit = () => {
  const [inputValue, setInputValues] = useState({
    firstname: '',
    lastname: '',
    jobtitle: '',
    location: '',
    bio: '',
    email: '',
    phone: '',
    marketplaceId: '',
    linkedinUrl: '',
    customUrl: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValue,
      [name]: value,
    });
  };
  // console.log(inputValue);
  // validations
  const validation = (value) => {
    console.log('value:', value);
    const errors = {};
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.firstname) {
      errors.firstname = 'First name is required!';
    }
    if (!value.lastname) {
      errors.lastname = 'Last name is required!';
    }
    if (!value.email) {
      errors.email = 'Email is required!';
    } else if (!reg.test(value.email)) {
      errors.email = 'Not valid email!';
    }
    if (value.phone === '') {
      errors.phone = 'Phone number required!!';
    } else if (value.phone.length <= 9) {
      errors.phone = 'Not a valid phone number!!';
    } else if (value.phone.length > 10) {
      errors.phone = 'Phone number not more then 10 digit!';
    }
    // if (!value.location) {
    //   errors.location = 'location is required!';
    // }
    if (!value.jobtitle) {
      errors.jobtitle = 'Job title is required!';
    }
    // if (!value.weblink) {
    //   errors.weblink = 'Weblink is required!';
    // }
    // if (!value.type) {
    //   errors.type = 'Type of business is required!';
    // }

    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validation(inputValue));
    setIssubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('input', inputValue);
    }
  }, [formErrors]);
  return (
    <div className={style.conatiner}>
      <p className={style.title}>Edit Profile</p>
      <div className={style.formContainer}>
        <div className={style.studentProfile}>
          {/* <img src={studentProfile} alt='studentProfile' /> */}
        </div>
        <div className={style.detailsCont}>
          <div className={style.inputWithLabel}>
            <label htmlFor='name'>First Name</label>
            <input
              type='text'
              placeholder='First Name'
              name='firstname'
              value={inputValue.firstname}
              onChange={handleChange}
            />
            <p style={{ color: 'red' }}>{formErrors.firstname}</p>
          </div>
          <div className={style.inputWithLabel}>
            <label htmlFor='name'>Last Name</label>
            <input
              type='text'
              placeholder='Last Name'
              name='lastname'
              value={inputValue.lastname}
              onChange={handleChange}
            />
          </div>
          <div className={style.inputWithLabel}>
            <label htmlFor='name'>Job Title</label>
            <input
              type='text'
              placeholder='Job title'
              name='jobtitle'
              value={inputValue.jobtitle}
              onChange={handleChange}
            />
          </div>
          <div className={style.inputWithLabel}>
            <label htmlFor='name'>Location</label>
            <input
              type='text'
              placeholder='Add city'
              name='location'
              value={inputValue.location}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className={style.inputWithLabel1}>
        <label htmlFor='name'>Bio</label>
        <textarea
          type='text'
          placeholder='Write a short description about yourself '
          maxLength='50'
          name='bio'
          value={inputValue.bio}
          onChange={handleChange}
        />
      </div>
      <div className={style.inputWithLabel1}>
        <label htmlFor='name'>Email ID</label>
        <input
          type='text'
          placeholder='Email ID'
          name='email'
          value={inputValue.email}
          onChange={handleChange}
        />
      </div>
      <div className={style.inputWithLabel1}>
        <label htmlFor='name'>Contact Number</label>
        <input
          type='text'
          placeholder='Contact Number'
          name='phone'
          value={inputValue.phone}
          onChange={handleChange}
        />
      </div>{' '}
      <div className={style.inputWithLabel1}>
        <label htmlFor='name'>Marketplace ID</label>
        <input
          type='text'
          placeholder='Add your Ajna Marketplace ID'
          name='marketplaceId'
          value={inputValue.marketplaceId}
          onChange={handleChange}
        />
      </div>{' '}
      <div className={style.inputWithLabel1}>
        <label htmlFor='name'>Linkedin URL</label>
        <input
          type='text'
          placeholder='Linkedin URL'
          name='linkedinUrl'
          value={inputValue.linkedinUrl}
          onChange={handleChange}
        />
      </div>{' '}
      <div className={style.inputWithLabel1}>
        <label htmlFor='name'>Custom URL</label>
        <input
          type='text'
          placeholder='Custom URL'
          name='customUrl'
          value={inputValue.customUrl}
          onChange={handleChange}
        />
      </div>
      <div className={style.opentowork}>
        <div className={style.openWorkTxt}>Open To Work</div>
        <label className={style.switch}>
          <input type='checkbox' />
          <span className={style.slider}></span>
        </label>
      </div>
      <div className={style.preffered}>
        <div className={style.prefferedkTxt}>
          Preferred Workplace <span>(Select minimum 1 option)</span>{' '}
        </div>
        <div className={style.prefreed_checkbox}>
          <input type='checkbox' />
          <label htmlFor=''>Open To Relocate</label>
        </div>
        <div className={style.prefreed_checkbox}>
          <input type='checkbox' />
          <label htmlFor=''>Work From Home</label>
        </div>
        <div className={style.prefreed_checkbox}>
          <input type='checkbox' />
          <label htmlFor=''>Work From Office</label>
        </div>
        <div className={style.prefreed_checkbox}>
          <input type='checkbox' />
          <label htmlFor=''>Hybrid</label>
        </div>
      </div>
      <div className={style.btnContainer}>
        <button onClick={handleSubmit}>Save</button>
        <button>Discard</button>
      </div>
    </div>
  );
};

export default Edit;
