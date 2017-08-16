/* eslint-disable import/prefer-default-export */
/* @flow */

import { css } from 'styled-components';

export const media = {
  mobile: (...args: Array<any>) => css`
    @media (max-width: 48rem) {
      ${css(...args)}
    }
  `,
};
