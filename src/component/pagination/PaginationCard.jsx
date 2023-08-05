import React from 'react';

const PaginationCard = ({ paginationdata }) => {
  // console.log('paginationdata:', paginationdata);

  return (
    <div>
      {paginationdata.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PaginationCard;
