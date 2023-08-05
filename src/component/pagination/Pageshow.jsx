import React from 'react';

const Pageshow = ({ totalpost, postPerpage, setCurrentPage }) => {
  // console.log('postPerpage:', postPerpage);
  // console.log('totalpost:', totalpost);

  let page = [];
  for (let i = 1; i <= Math.ceil(totalpost / postPerpage); i++) {
    page.push(i);
  }
  // console.log('page', page);
  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      {page.map((item, index) => (
        <button
          onClick={() => setCurrentPage(item)}
          style={{ border: '1px solid', margin: '5px', padding: '10px' }}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pageshow;
