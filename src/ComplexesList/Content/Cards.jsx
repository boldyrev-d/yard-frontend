import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
import cardImage from './complex.jpg';
import {colors, fonts} from '../../constants'

const Card = styled(Link)`
  display: flex;
  margin-bottom: 3rem;

  &:hover {
    box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
    transition: box-shadow .25s ease;
  }
`;

const Info = styled.div`
  padding: 1.5rem 6.25rem 1.5rem 2rem;
  background-color: #fff;
`;

const Place = styled.p`
  margin: 0 0 1.5rem;
  color: ${colors.slateGrey}''
  font-family: ${fonts.monaco};
  line-height: 1rem;
  text-transform: uppercase;
`;

const Title = styled.h3`
  margin: 0 0 .5rem;
  color: ${colors.blackTwo};
  font-size: 2.5rem;
  line-height: 3.5rem;
`;

const Description = styled.p`
  margin: 0;
  color: ${colors.charcoalGrey}
`;

export default () => {
  return (
    <section>
      <Grid>
        <Row>
          <Col xs={12}>
            <Card to="/complexes/1" title="764 Metropolitan Avenue">
              <img
                src={cardImage}
                alt="764 Metropolitan Avenue"
                title="764 Metropolitan Avenue"
              />
              <Info>
                <Place>South Beach, San Francisco</Place>
                <Title>764 Metropolitan Avenue</Title>
                <Description>The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments.</Description>
              </Info>
            </Card>
          </Col>

          <Col xs={12}>
            <Card to="/complexes/2" title="100 East 53rd Street">
              <img
                src={cardImage}
                alt="100 East 53rd Street"
                title="100 East 53rd Street"
              />
              <Info>
                <Place>MIDTOWN EAST, MANHATTAN</Place>
                <Title>100 East 53rd Street</Title>
                <Description>One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned.</Description>
              </Info>
            </Card>
          </Col>

          <Col xs={12}>
            <Card to="/complexes/3" title="152 Elizabeth">
              <img
                src={cardImage}
                alt="152 Elizabeth"
                title="152 Elizabeth"
              />
              <Info>
                <Place>NOLITA, MANHATTAN</Place>
                <Title>152 Elizabeth</Title>
                <Description>152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood.</Description>
              </Info>
            </Card>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
