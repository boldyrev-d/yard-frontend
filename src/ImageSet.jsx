/* @flow */

import React from 'react';

type ImageProps = {
  x1: string,
  x2: string,
  x3: string,
  alt: string,
  title: string,
  rest: Array<Object>,
};

export default (props: ImageProps) => {
  const {
    x1, x2, x3, alt, title, ...rest
  } = props;

  return <img src={x1} srcSet={`${x2} 2x, ${x3} 3x`} alt={alt} title={title} {...rest} />;
};
