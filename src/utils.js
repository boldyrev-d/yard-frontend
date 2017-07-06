/* eslint-disable import/prefer-default-export */

/* @flow */

export const getImageUrl = (image: Object, size: number = 512): string => {
  if (image) {
    return `https://s3-eu-central-1.amazonaws.com/yard-images/${image.id}-${size}`;
  }

  return 'http://via.placeholder.com/512/?text=%D0%9D%D0%B5%D1%82+%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F';
};
