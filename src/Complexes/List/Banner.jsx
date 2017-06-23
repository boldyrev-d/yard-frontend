import React from 'react';
import styled from 'styled-components';
import {Grid} from 'react-flexbox-grid';

const Banner = styled.section`
  background-color: ${props => props.theme.black};
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
        <DevelopmentLogo src={`${process.env.PUBLIC_URL}/images/compass-development-logo.svg`} alt="Compass" title="Compass" />
      </Grid>
    </Banner>
  )
};
