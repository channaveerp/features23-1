import React from 'react';
import './Succes.css';
import { data } from './constant';

console.log('data:', data.map);

const Cirriculum = () => {
  return (
    <div className='mainContainer'>
      {data.map((item, index) => (
        <div className='items' key={index}>
          <div className='imgCont'>
            <img src={item.img} alt='Course' />
          </div>

          <div>
            <div className='titleCont'>
              <h1 className='title'>{item.title}</h1>
              <p className='lessons'>{item.lessons}</p>
            </div>
            <div className='desc'>
              {item?.desc?.map((e, index) => (
                <p key={index}>{e}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cirriculum;
