/* @flow */

// FIXME: Fix image API
export const getImageUrl = (width: number = 512): string => {
  const ASPECT_RATIO = 1.777;
  const height = Math.floor(width / ASPECT_RATIO);
  const hash = Math.floor(Math.random() * 10000);

  return `http://placeimg.com/${width}/${height}/arch?hash-${hash}`;
};

export const pluralize = (number: number, one: string, few: string, other: string): string => {
  const modulo: number = number % 10;

  if (number >= 5 && number <= 20) {
    return `${number} ${other}`;
  }

  if (modulo >= 2 && modulo <= 4) {
    return `${number} ${few}`;
  }

  if (modulo === 1) {
    return `${number} ${one}`;
  }

  return `${number} ${other}`;
};
