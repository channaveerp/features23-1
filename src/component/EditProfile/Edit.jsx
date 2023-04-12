import React from 'react';
import style from './Edit.module.css';
import profile from '../../asset/profile.svg';

const Edit = () => {
  return (
    <div className={style.conatiner}>
      <p className={style.title}>Edit Profile</p>
      <div className={style.formContainer}>
        <div className={style.studentProfile}>
          <img src={profile} alt='' />
        </div>
        <div className={style.detailsCont}>
          <div className={style.inputWithLabel}>
            <label htmlFor='name'>First Name</label>
            <input type='text' placeholder='First Name' />
          </div>
          <div className={style.inputWithLabel}>
            <label htmlFor='name'>Last Name</label>
            <input type='text' placeholder='Last Name' />
          </div>
          <div className={style.inputWithLabel}>
            <label htmlFor='name'>Job Title</label>
            <input type='text' placeholder='Job title' />
          </div>
          <div className={style.inputWithLabel}>
            <label htmlFor='name'>Location</label>
            <input type='text' placeholder='Add city' />
          </div>
        </div>
      </div>
      <div className={style.secondCont}>fgfg</div>
      <div className={style.inputWithLabel}>
        <label htmlFor='name'>Location</label>
        <input type='text' placeholder='Add city' />
      </div>
    </div>
  );
};

export default Edit;
