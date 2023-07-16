import React, { useState } from 'react';
import './Progress.css';

const Progressbar = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handlePrevClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextClick = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className='container'>
      <div className='progress-container'>
        <div
          className='progress'
          id='progress'
          style={{ width: `${(currentStep - 1) * 33.33}%` }}></div>
        <div className={`circle ${currentStep >= 1 ? 'active' : ''}`}>1</div>
        <div className={`circle ${currentStep >= 2 ? 'active' : ''}`}>2</div>
        <div className={`circle ${currentStep >= 3 ? 'active' : ''}`}>3</div>
        <div className={`circle ${currentStep >= 4 ? 'active' : ''}`}>4</div>
      </div>
      <button className='prev' id='prev' onClick={handlePrevClick}>
        prev
      </button>
      <button className='next' id='next' onClick={handleNextClick}>
        next
      </button>
    </div>
  );
};

export default Progressbar;
