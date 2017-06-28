/* eslint-disable import/prefer-default-export */

import { API_BASE_URL } from './constants';

export const get = resource => fetch(`${API_BASE_URL}${resource}`).then(res => res.json());
