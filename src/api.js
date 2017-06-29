/* eslint-disable import/prefer-default-export */

/* @flow */
const API_BASE_URL = 'https://api.jqestate.ru/v1';

export const get = (resource: string): Promise<any> =>
  fetch(API_BASE_URL + resource).then(res => res.json());
