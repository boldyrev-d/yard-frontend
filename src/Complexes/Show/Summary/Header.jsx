/* @flow */

import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 1.5em;
  border-bottom: 1px solid ${props => props.theme.anotherGrey};
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${props => props.theme.philosopher};
  font-size: 1.5rem;
  line-height: 1.75rem;

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

const Subtitle = styled.small`
  display: block;
  margin-top: .625rem;
  font-family: ${props => props.theme.fira};
  font-size: .875rem;
  line-height: 1.375rem;
  font-weight: 300;
  color: ${props => props.theme.hueGrey};
`;

type Props = {
  architect: string,
};

export default ({ architect }: Props) =>
  (<Header>
    <Title>
      950
      <Subtitle>предложений</Subtitle>
    </Title>
    <Title>
      {architect}
      <Subtitle>архитектор</Subtitle>
    </Title>
    <Title>
      Группа «ПСН»
      <Subtitle>застройщик</Subtitle>
    </Title>
  </Header>);
