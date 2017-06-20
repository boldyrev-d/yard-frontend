import React from 'react';
import styled from 'styled-components';
import {Grid} from 'react-flexbox-grid';
import {colors} from '../constants';
import developmentLogoImg from './compass-development-logo.svg';

const Banner = styled.section`
  background-color: ${colors.black};
  text-align: center;
`

const DevelopmentLogo = styled.img`
  margin-top: 5rem;
  margin-bottom: 5rem;
`

export default () => {
  return (
    <Banner>
      <Grid>
        <DevelopmentLogo src={developmentLogoImg} alt="Compass" title="Compass" />
      </Grid>
    </Banner>
  )
};
