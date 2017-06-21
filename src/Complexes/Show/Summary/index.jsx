import React from 'react';
import styled from 'styled-components';
import {Grid} from 'react-flexbox-grid';
import Header from './Header';
import Features from './Features';
import Description from './Description';

const Summary = styled.section`
  background-color: #fff;
`;

export default () => {
  return (
    <Summary>
      <Grid>
        <Header/>
        <Features/>
        <Description/>
      </Grid>
    </Summary>
  )
};
