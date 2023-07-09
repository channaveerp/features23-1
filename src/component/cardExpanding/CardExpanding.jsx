import React, { useState } from 'react';
import "./index.css"

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1606814893907-c2e42943c91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://plus.unsplash.com/premium_photo-1673529434553-72e165cbdc57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1384552411/photo/six-week-old-baby-girl.jpg?s=1024x1024&w=is&k=20&c=8oQx_MzLkiZoKPXsr1oen8p4XxcO_QNAtx3x7OFUui8=',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='container'>
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`single ${index === activeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
          onClick={() => handleClick(index)}>
          <h3>Good girl</h3>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
