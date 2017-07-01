/* eslint-disable react/no-unused-prop-types */

/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

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
  font-family: ${props => props.theme.philosopher};
  font-size: 2rem;
  line-height: 2rem;
`;

const Address = styled.small`
  display: block;
  margin-top: .5rem;
  font-family: ${props => props.theme.fira};
  font-size: .875rem;
  font-weight: 300;
  color: ${props => props.theme.hueGrey};
`;

const Button = styled.button`
  padding: .5rem 1rem;
  font-family: ${props => props.theme.fira};
  font-size: .625rem;
  line-height: .625rem;
  font-weight: 300;
  background-color: transparent;
  border: 1px solid ${props => props.theme.anotherGrey};
  border-radius: 2px;
  color: ${props => props.theme.coolBlue};
  outline: none;
  cursor: pointer;
`;

function formatAddress(location: Object): string {
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

type LocationShape = {
  countryId: number,
  countryName: string,
  districtId: number,
  districtName: string,
  house: string,
  latitude: string,
  localityId: number,
  localityName: string,
  longitude: string,
  postalCode: number,
  regionId: number,
  regionName: string,
  street: string,
  subLocalityId: number,
  subLocalityName: string,
  subwayIds: Array<number>,
};

export default ({ name, location }: { name: string, location: LocationShape }) =>
  (<Header>
    <Grid>
      <Inner>
        <div>
          <Title>{name}</Title>
          <Address>{formatAddress(location)}</Address>
        </div>
        <Button>В избранное</Button>
      </Inner>
    </Grid>
  </Header>);
