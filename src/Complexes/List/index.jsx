/* eslint-disable react/no-unescaped-entities */
/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Banner from './Banner';
import Discover from './Discover';
import Card from './Card';
import { getImageUrl } from '../../utils';
import { get } from '../../api';
import type { ComplexShape } from '../types';
import { media } from '../../style-utils';

const Content = styled.section`
  margin-top: 4rem;
  margin-bottom: 3rem;

  ${media.mobile`
    margin-top: 2rem;
  `};
`;

function getLocationString(...args: Array<?string>): string {
  return args.filter(arg => !!arg).join(', ');
}

class List extends Component {
  state: {
    items: Array<ComplexShape>,
  } = {
    items: [],
  };

  componentDidMount() {
    get('/complexes?filter[state]=public').then(({ items }) => this.setState({ items }));
  }

  render() {
    return (
      <div>
        <Banner />
        <Content>
          <Discover />
          <section>
            <Grid>
              {this.state.items.map(complex =>
                (<Card
                  key={complex.id}
                  id={complex.id}
                  image={getImageUrl(complex.images[0])}
                  title={complex.name}
                  place={getLocationString(
                    complex.location.subLocalityName,
                    complex.location.street,
                    complex.location.house,
                  )}
                >
                  The Lewis Steel Building is a masterful industrial conversion located in the heart
                  of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory
                  has been transformed into 83 individually unique and luxury loft apartments.
                </Card>),
              )}
            </Grid>
          </section>
        </Content>
      </div>
    );
  }
}

export default List;
