/* eslint-disable import/prefer-default-export */

/* @flow */
const API_BASE_URL: string = 'https://yard.moscow/api/v1';

export const get = (resource: string): Promise<any> =>
  fetch(encodeURI(API_BASE_URL + resource)).then(res => res.json());
