import React from 'react';

const ImageSet = (props) => {
  return (
    <img
      src={`${props.x1}`}
      srcSet={`${props.x2} 2x, ${props.x3} 3x`}
      alt={`${props.alt}`} title={`${props.title}`}
      {...props}
     />
  );
};

export default ImageSet;
