import React, {Component} from 'react';
import styled from 'styled-components';
import {Grid} from 'react-flexbox-grid';
import developmentLogoImg from './compass-development-logo.svg';

class Banner extends Component {
  render() {
    const CSSVariables = styled.div`
      --black: #161616;
    `;

    const Banner = styled.section`
      background-color: var(--black);
      text-align: center;
    `

    const DevelopmentLogo = styled.img`
      margin-top: 5rem;
      margin-bottom: 5rem;
    `

    return (
      <CSSVariables>
        <Banner>
          <Grid>
            <DevelopmentLogo src={developmentLogoImg} alt="Compass" title="Compass" />
          </Grid>
        </Banner>
      </CSSVariables>
    );
  }
}

export default Banner;
