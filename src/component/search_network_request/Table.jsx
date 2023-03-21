import React from 'react';

const Table = ({ User }) => {
  return (
    <div>
      <table style={{ border: '1px solid', margin: '1rem auto' }}>
        <tr style={{ border: '1px solid' }}>
          <th style={{ border: '1px solid' }}>first_name</th>
          <th style={{ border: '1px solid' }}>last_name</th>
          <th style={{ border: '1px solid' }}>Email_name</th>
        </tr>
        <tbody>
          {User.length === 0 ? (
            <>Not found</>
          ) : (
            User.map((item) => (
              <tr key={item.id}>
                <td style={{ border: '1px solid', padding: '0.5rem' }}>
                  {item.first_name}
                </td>
                <td style={{ border: '1px solid', padding: '0.5rem' }}>
                  {item.last_name}
                </td>
                <td style={{ border: '1px solid', padding: '0.5rem' }}>
                  {item.email}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
