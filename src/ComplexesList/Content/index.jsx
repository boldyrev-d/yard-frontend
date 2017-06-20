import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Cards from './Cards';

const Content = styled.section`
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

export default () => {
  return (
    <Content>
      <Header/>
      <Cards/>
    </Content>
  );
};
