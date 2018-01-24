/* @flow */

import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import { media } from '../../style-utils';

const Discover = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  ${media.sm`
    margin-bottom: 4rem;
  `};
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 2rem;

  ${media.sm`
    font-size: 1.5rem;
  `};
`;

const Description = styled.p`
  margin: 0.5rem 0 1rem;
  line-height: 1.5rem;
`;

export default () => (
  <Discover>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-8 col-lg-offset-2">
          <Title>Discover Out New Developments</Title>
          <Description>
            Compass brings a modern approach to new development marketing and sales. From boutique
            rental conversions to luxurious ground-up condominiums, browse our portfolio of current
            offerings.
          </Description>
          <Button>Contact The Team</Button>
        </div>
      </div>
    </div>
  </Discover>
);
