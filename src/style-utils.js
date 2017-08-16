/* eslint-disable import/prefer-default-export */
/* @flow */

import { css } from 'styled-components';

export const media = {
  mobile: (...args: Array<any>) => css`
    @media (min-width: 575px) {
      ${css(...args)}
    }
  `,

  sm: (...args: Array<any>) => css`
    @media (min-width: 576px) {
      ${css(...args)}
    }
  `,

  md: (...args: Array<any>) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,

  lg: (...args: Array<any>) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,

  xl: (...args: Array<any>) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
};
