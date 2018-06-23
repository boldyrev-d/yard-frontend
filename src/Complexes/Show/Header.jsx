/* eslint-disable react/no-unused-prop-types */

/* @flow */

import React from 'react';
import styled from 'styled-components';
import type { LocationShape } from '../types';

const Header = styled.section`
  padding: 1.5rem 0 1rem;
  background-color: #fff;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme: { philosopher } }) => philosopher};
  font-size: 2rem;
  line-height: 2rem;
`;

const Address = styled.small`
  display: block;
  margin-top: 0.5rem;
  font-family: ${({ theme: { fira } }) => fira};
  font-size: 0.875rem;
  font-weight: 300;
  color: ${({ theme: { hueGrey } }) => hueGrey};
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-family: ${({ theme: { fira } }) => fira};
  font-size: 0.625rem;
  line-height: 0.625rem;
  font-weight: 300;
  background-color: transparent;
  border: 1px solid ${({ theme: { anotherGrey } }) => anotherGrey};
  border-radius: 2px;
  color: ${({ theme: { coolBlue } }) => coolBlue};
  outline: none;
  cursor: pointer;
`;

function formatAddress(location: LocationShape): string {
  const address: string = [
    (location.subLocalityName: ?string),
    (location.street: ?string),
    (location.house: ?string),
  ]
    .filter(item => !!item)
    .join(', ');

  if (location.postalCode) return `${address} • ${location.postalCode}`;

  return address;
}

export default ({ name, location }: { name: string, location: LocationShape }) => (
  <Header>
    <div className="container">
      <Inner>
        <div>
          <Title>
            {name}
          </Title>
          <Address>
            {formatAddress(location)}
          </Address>
        </div>
        <Button>
В избранное
        </Button>
      </Inner>
    </div>
  </Header>
);
