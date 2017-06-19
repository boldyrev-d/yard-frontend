import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header';
import Cards from './Cards';

class Content extends Component {
  render() {
    const Content = styled.section`
      margin-top: 4rem;
      margin-bottom: 3rem;
    `;

    return (
      <Content>
        <Header/>
        <Cards/>
      </Content>
    );
  }
}

export default Content;
