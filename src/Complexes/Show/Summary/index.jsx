/* @flow */

import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';

const Summary = styled.section`
  background-color: #fff;
`;

// TODO: Object Shape
type Props = {
  details: Object,
  statistics: Object,
};

export default ({ details, statistics }: Props) => (
  <Summary>
    <div className="container">
      <Header architect={details.architect} />
      <Features statistics={statistics} details={details} />
      <Description />
      <Infrastructure />
    </div>
  </Summary>
);
