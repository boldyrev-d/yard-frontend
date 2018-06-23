/* @flow */

import React from 'react';
import styled from 'styled-components';
import { media } from '../../style-utils';

const Banner = styled.section`
  display: none;
  background-color: ${({ theme: { black } }) => black};
  text-align: center;

  ${media.sm`
    display: block;
  `};
`;

const DevelopmentLogo = styled.img`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

export default () => (
  <Banner>
    <div className="container">
      <DevelopmentLogo
        src={`${PUBLIC_URL}/images/compass-development-logo.svg`}
        alt="Compass"
        title="Compass"
      />
    </div>
  </Banner>
);
