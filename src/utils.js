/* @flow */

export const getImageUrl = (id: string): string => `https://yard-images-api.now.sh/api/v1/${id}`;

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
