import React from 'react';
import { data } from './data';
import './page.css';

const Pagination = () => {
    
  return (
    <div className='gridCont'>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <img
              src={item.image}
              alt='images'
              style={{ width: '200px', height: '200px' }}
            />
            ;
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
