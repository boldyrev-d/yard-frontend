import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {colors, fonts} from '../../constants';
import {Link as RouterLink} from 'react-router-dom';

const DistrictGuide = styled.section`
  padding-top: 4rem;
  padding-bottom: 12.125rem;
  background-color: ${colors.charcoalGrey};
`;

const Name = styled.div`
  margin-top: 7.25rem;
  margin-bottom: 3rem;
  font-family: ${fonts.philosopher};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.hueGrey};
`;

const Description = styled.div`
  margin-bottom: 3rem;
  font-family: ${fonts.philosopher};
  font-size: 3rem;
  line-height: 3.75rem;
  color: #fff;
`;

const Link = styled(RouterLink)`
  position: relative;
  color: ${colors.coolBlue};
`;

const Image = styled.img`
  width: 100%;
`;

export default () => {
  return (
    <DistrictGuide>
      <Grid>
        <Row>
          <Col lg={6}>
            <Name>Якиманка</Name>
            <Description>Исторический центр Москвы в двух километрах от Кремля</Description>
            <Link to="#" title="Гид по Якиманке">Гид по Якиманке</Link>
          </Col>
          <Col lg={6}>
            <Image
              src={`${process.env.PUBLIC_URL}/images/polyanka-photo.jpg`}
              srcSet={`${process.env.PUBLIC_URL}/images/polyanka-photo@2x.jpg 2x, ${process.env.PUBLIC_URL}/images/polyanka-photo@3x.jpg 3x`}
              alt="Якиманка" title="Якиманка"
             />
          </Col>
        </Row>
      </Grid>
    </DistrictGuide>
  );
};
