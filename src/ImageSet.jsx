import React from 'react';

const ImageSet = (props) => {
  const {x1, x2, x3, alt, title, ...rest} = props;

  return (
    <img
      src={`${x1}`}
      srcSet={`${x2} 2x, ${x3} 3x`}
      alt={`${alt}`} title={`${title}`}
      {...rest}
     />
  );
};

export default ImageSet;
