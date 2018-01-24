/* @flow */

import React from 'react';
import styled from 'styled-components';
import MapBox from './MapBox';
import type { LocationShape } from '../types';

const Location = styled.section`
  background-color: #fff;
`;

const StyledMapbox = styled(MapBox)`
  margin-top: -130px;
  margin-bottom: 4rem;
  height: 303px;
  max-width: 100%;
  box-shadow: 0 6px 15px 3px rgba(0, 0, 0, 0.2);
`;

const Places = styled.div`
  margin-top: -130px;
  margin-bottom: 4rem;
  max-height: 306px;
  background-color: #fff;
  box-shadow: 0 6px 15px 3px rgba(0, 0, 0, 0.2);
`;

const Place = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.anotherGrey};
`;

const Title = styled.p`
  margin: 0 0 0.5rem;
  line-height: 1.375rem;
  font-weight: 500;
`;

const Distance = styled.p`
  line-height: 1.375rem;
  margin: 0;
`;

type Props = {
  location: LocationShape,
};

export default ({ location }: Props) => (
  <Location>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <StyledMapbox location={location} />
        </div>
        <div className="col-lg-6">
          <Places>
            <Place>
              <Title>Красный Октябрь</Title>
              <Distance>24 минуты, 6 км</Distance>
            </Place>
            <Place>
              <Title>World class</Title>
              <Distance>2 минуты, 300 м</Distance>
            </Place>
            <Place>
              <Title>Третьяковская галерея</Title>
              <Distance>14 минут, 4 км</Distance>
            </Place>
          </Places>
        </div>
      </div>
    </div>
  </Location>
);
