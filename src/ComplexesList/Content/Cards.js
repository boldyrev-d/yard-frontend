import React, {Component} from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import cardImage from './complex.jpg';

class Cards extends Component {
  render() {
    const CSSVariables = styled.div`
      --charcoal-grey: #3e4247;
      --slate-grey: #646971;
      --black-two: #000;
      --monaco: "Monaco", "Consolas", "Lucida Console", monospace;
    `;

    const Cards = styled.section`
    `;

    const Card = styled.a`
      display: flex;
      margin-bottom: 3rem;

      &:hover {
        box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
        transition: box-shadow .25s ease;
      }
    `;

    const CardImage = styled.img`

    `;

    const CardInfo = styled.div`
      padding: 1.5rem 6.25rem 1.5rem 2rem;
      background-color: #fff;
    `;

    const CardPlace = styled.p`
      margin: 0 0 1.5rem;
      color: var(--slate-grey);
      font-family: var(--monaco);
      line-height: 1rem;
      text-transform: uppercase;
    `;

    const CardTitle = styled.h3`
      margin: 0 0 .5rem;
      color: var(--black-two);
      font-size: 2.5rem;
      line-height: 3.5rem;
    `;

    const CardDescription = styled.p`
      margin: 0;
      color: var(--charcoal-grey);
    `;

    return (
      <CSSVariables>
        <Cards>
          <Grid>
            <Row>
              <Col xs={12}>
                <Card href="/complexes/1" title="764 Metropolitan Avenue">
                  <CardImage
                    src={cardImage}
                    alt="764 Metropolitan Avenue"
                    title="764 Metropolitan Avenue"
                  />
                  <CardInfo>
                    <CardPlace>South Beach, San Francisco</CardPlace>
                    <CardTitle>764 Metropolitan Avenue</CardTitle>
                    <CardDescription>The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments.</CardDescription>
                  </CardInfo>
                </Card>
              </Col>

              <Col xs={12}>
                <Card href="/complexes/2" title="100 East 53rd Street">
                  <CardImage
                    src={cardImage}
                    alt="100 East 53rd Street"
                    title="100 East 53rd Street"
                  />
                  <CardInfo>
                    <CardPlace>MIDTOWN EAST, MANHATTAN</CardPlace>
                    <CardTitle>100 East 53rd Street</CardTitle>
                    <CardDescription>One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned.</CardDescription>
                  </CardInfo>
                </Card>
              </Col>

              <Col xs={12}>
                <Card href="/complexes/3" title="152 Elizabeth">
                  <CardImage
                    src={cardImage}
                    alt="152 Elizabeth"
                    title="152 Elizabeth"
                  />
                  <CardInfo>
                    <CardPlace>NOLITA, MANHATTAN</CardPlace>
                    <CardTitle>152 Elizabeth</CardTitle>
                    <CardDescription>152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood.</CardDescription>
                  </CardInfo>
                </Card>
              </Col>
            </Row>
          </Grid>
        </Cards>
      </CSSVariables>
    );
  }
}

export default Cards;
