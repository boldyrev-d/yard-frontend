/* eslint-disable jsx-a11y/anchor-is-valid */
/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import ImageSet from '../../ImageSet';

const DistrictGuide = styled.section`
  padding-top: 4rem;
  padding-bottom: 12.125rem;
  background-color: ${({ theme: { charcoalGrey } }) => charcoalGrey};
`;

const Name = styled.div`
  margin-top: 7.25rem;
  margin-bottom: 3rem;
  font-family: ${({ theme: { philosopher } }) => philosopher};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme: { hueGrey } }) => hueGrey};
`;

const Description = styled.div`
  margin-bottom: 3rem;
  font-family: ${({ theme: { philosopher } }) => philosopher};
  font-size: 3rem;
  line-height: 3.75rem;
  color: #fff;
`;

const Link = styled(RouterLink)`
  position: relative;
  color: ${({ theme: { coolBlue } }) => coolBlue};
`;

const Image = styled(ImageSet)`
  width: 100%;
`;

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

export default () => (
  <DistrictGuide>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Name>
Якиманка
          </Name>
          <Description>
Исторический центр Москвы в двух километрах от Кремля
          </Description>
          <Link to="#" title="Гид по Якиманке">
            Гид по Якиманке
          </Link>
        </div>
        <div className="col-lg-6">
          <Image
            x1={`${PUBLIC_URL}/images/polyanka-photo.jpg`}
            x2={`${PUBLIC_URL}/images/polyanka-photo@2x.jpg`}
            x3={`${PUBLIC_URL}/images/polyanka-photo@3x.jpg`}
            alt="Якиманка"
            title="Якиманка"
          />
        </div>
      </div>
    </div>
  </DistrictGuide>
);
