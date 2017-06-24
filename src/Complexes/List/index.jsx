/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Banner from './Banner';
import Discover from './Discover';
import Card from './Card';

const Content = styled.section`
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

export default () =>
  (<div>
    <Banner />
    <Content>
      <Discover />
      <section>
        <Grid>
          <Card
            id={1}
            image={`${process.env.PUBLIC_URL}/images/complex.jpg`}
            title="764 Metropolitan Avenue"
            place="South Beach, San Francisco"
          >
            The Lewis Steel Building is a masterful industrial conversion located in the heart of
            Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been
            transformed into 83 individually unique and luxury loft apartments.
          </Card>
          <Card
            id={2}
            image={`${process.env.PUBLIC_URL}/images/complex.jpg`}
            title="100 East 53rd Street"
            place="MIDTOWN EAST, MANHATTAN"
          >
            One Hundred East Fifty Third Street by Foster + Partners is a limited collection of
            modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging
            from alcove lofts to four bedrooms within the 63-story tower are generously
            proportioned
          </Card>
          <Card
            id={3}
            image={`${process.env.PUBLIC_URL}/images/complex.jpg`}
            title="152 Elizabeth"
            place="NOLITA, MANHATTAN"
          >
            152 Elizabeth is an ultra-luxury condominium building—the first in New York City
            designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and
            Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound
            architectural statement and embrace the industrial character of the neighborhood.
          </Card>
        </Grid>
      </section>
    </Content>
  </div>);
