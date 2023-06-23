import React, { useState } from 'react';
import './student.css';
import { studentworks } from './constants';
console.log('studentworks:', studentworks);

const StudentWork = () => {
  const [showMore, setShowMore] = useState(false);
  const dataToShow = showMore ? studentworks : studentworks.slice(0, 6);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };
  return (
    <div className='gridcont'>
      {dataToShow.length > 0 ? (
        dataToShow.map((item, i) => (
          <div className='imgwithTextCont'>
            <div key={i}>
              {i !== 4 ? (
                <div className='imgcont'>
                  <img src={item.images} alt='' />
                </div>
              ) : (
                <div className='lastimgcont'>
                  <img src={item.images} alt='' />
                </div>
              )}

              <div className='text'>
                <p>{item.experience}</p>
                <p>{item.student_name}</p>
              </div>
            </div>
            <div className='overlay'>{item.over}</div>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
      {studentworks.length > 6 && (
        <div>
          {!showMore ? (
            <button onClick={handleShowMore}>Show More</button>
          ) : (
            <button onClick={handleShowLess}>Show Less</button>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentWork;
