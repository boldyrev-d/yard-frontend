import React from 'react';
import styled from 'styled-components';
import {Grid} from 'react-flexbox-grid';
import Header from './Header';
import Features from './Features';

const Summary = styled.section`
  background-color: #fff;
`;

export default () => {
  return (
    <Summary>
      <Grid>
        <Header/>
        <Features/>
      </Grid>
    </Summary>
  )
};
