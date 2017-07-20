/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { media } from '../../style-utils';

const Banner = styled.section`
  background-color: ${props => props.theme.black};
  text-align: center;

  ${media.mobile`
    display: none;
  `};
`;

const DevelopmentLogo = styled.img`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

export default () =>
  (<Banner>
    <Grid>
      <DevelopmentLogo
        src={`${PUBLIC_URL}/images/compass-development-logo.svg`}
        alt="Compass"
        title="Compass"
      />
    </Grid>
  </Banner>);
