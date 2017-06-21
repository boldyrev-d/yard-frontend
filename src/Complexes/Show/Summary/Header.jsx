import React from 'react';
import styled from 'styled-components';
import {colors, fonts} from '../../../constants';

const Header = styled.header`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 1.5em;
  border-bottom: 1px solid ${colors.anotherGrey};
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${fonts.philosopher};
  font-size: 1.5rem;
  line-height: 1.75rem;

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

const Subtitle = styled.small`
  display: block;
  margin-top: .625rem;
  font-family: ${fonts.fira};
  font-size: .875rem;
  line-height: 1.375rem;
  font-weight: 300;
  color: ${colors.hueGrey};
`;

export default () => {
  return (
    <Header>
      <Title>
        950
        <Subtitle>предложений</Subtitle>
      </Title>
      <Title>
        John McAslan + Partners
        <Subtitle>архитектор</Subtitle>
      </Title>
      <Title>
        Группа «ПСН»
        <Subtitle>застройщик</Subtitle>
      </Title>
    </Header>
  )
};
