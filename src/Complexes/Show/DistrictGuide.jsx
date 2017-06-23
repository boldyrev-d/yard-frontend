import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link as RouterLink} from 'react-router-dom';

import ImageSet from '../../ImageSet';

const DistrictGuide = styled.section`
  padding-top: 4rem;
  padding-bottom: 12.125rem;
  background-color: ${props => props.theme.charcoalGrey};
`;

const Name = styled.div`
  margin-top: 7.25rem;
  margin-bottom: 3rem;
  font-family: ${props => props.theme.philosopher};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.hueGrey};
`;

const Description = styled.div`
  margin-bottom: 3rem;
  font-family: ${props => props.theme.philosopher};
  font-size: 3rem;
  line-height: 3.75rem;
  color: #fff;
`;

const Link = styled(RouterLink)`
  position: relative;
  color: ${props => props.theme.coolBlue};
`;

const Image = styled(ImageSet)`
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
              x1={`${process.env.PUBLIC_URL}/images/polyanka-photo.jpg`}
              x2={`${process.env.PUBLIC_URL}/images/polyanka-photo@2x.jpg`}
              x3={`${process.env.PUBLIC_URL}/images/polyanka-photo@3x.jpg`}
              alt='Якиманка'
              title='Якиманка'
            />
          </Col>
        </Row>
      </Grid>
    </DistrictGuide>
  );
};
