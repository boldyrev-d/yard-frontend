import React from 'react';
import styled from 'styled-components';
import {Grid} from 'react-flexbox-grid';
import Header from './Header';

const Summary = styled.section`
  background-color: #fff;
`;

export default () => {
  return (
    <Summary>
      <Grid>
        <Header/>
      </Grid>
    </Summary>
  )
};
