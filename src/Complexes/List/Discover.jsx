/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../Button';

const Discover = styled.div`
  margin-bottom: 4rem;
  text-align: center;

  @media (max-width: 64rem) {
    margin-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;

  @media (max-width: 64rem) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  margin: .5rem 0 1rem;
  line-height: 1.5rem;
`;

export default () =>
  (<Discover>
    <Grid>
      <Row>
        <Col xs={12} lgOffset={2} lg={8}>
          <Title>Discover Out New Developments</Title>
          <Description>
            Compass brings a modern approach to new development marketing and sales. From boutique
            rental conversions to luxurious ground-up condominiums, browse our portfolio of current
            offerings.
          </Description>
          <Button>Contact The Team</Button>
        </Col>
      </Row>
    </Grid>
  </Discover>);
