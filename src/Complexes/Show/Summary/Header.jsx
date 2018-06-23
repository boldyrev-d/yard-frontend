/* @flow */

import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 1.5em;
  border-bottom: 1px solid ${({ theme: { anotherGrey } }) => anotherGrey};
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${({ theme: { philosopher } }) => philosopher};
  font-size: 1.5rem;
  line-height: 1.75rem;

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

const Subtitle = styled.small`
  display: block;
  margin-top: 0.625rem;
  font-family: ${({ theme: { fira } }) => fira};
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 300;
  color: ${({ theme: { hueGrey } }) => hueGrey};
`;

type Props = {
  architect: string,
};

export default ({ architect }: Props) => (
  <Header>
    <Title>
      950
      <Subtitle>
предложений
      </Subtitle>
    </Title>
    <Title>
      {architect}
      <Subtitle>
архитектор
      </Subtitle>
    </Title>
    <Title>
      Группа «ПСН»
      <Subtitle>
застройщик
      </Subtitle>
    </Title>
  </Header>
);
