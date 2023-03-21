import React, { useState } from 'react';
import style from './index.module.css';
import Table from './Table';
import { User } from './user';

export const Search = () => {
  const [query, setquery] = useState('');

  const handleChange = (e) => {
    setquery(e.target.value);
  };

  const keys = ['first_name', 'last_name', 'email'];
  console.log(User[0].email);

  /*searching by email,fname,lname */

  const saerch = (User) => {
    return User.filter(
      (item) =>
        item.first_name.toLowerCase().includes(query) ||
        item.last_name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };

  /*optimize solution */
  //   const saerch = (User) => {
  //     return User.filter((item) =>
  //       keys.some((key) => item[key].toLowerCase().includes(query))
  //     );
  //   };

  return (
    <div>
      <input
        type='text'
        placeholder='search....'
        onChange={(e) => handleChange(e)}
      />
      {/* {User.filter((id) =>
        id.first_name.toLocaleLowerCase().includes(query)
      ).map((item) => {
        return (
          <ul>
            <li>{item.first_name}</li>
          </ul>
        );
      })} */}
      <Table User={saerch(User)} />
    </div>
  );
};
