import React from 'react';

const Table = ({ User }) => {
  return (
    <div>
      <table>
        <tr>
          <th>first_name</th>
          <th>last_name</th>
          <th>Email_name</th>
        </tr>
        <tbody>
          {User.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
