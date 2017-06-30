/* eslint-disable react/prop-types */

/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Children } from 'react';

const Card = styled(Link)`
  display: flex;
  margin-bottom: 3rem;

  &:hover {
    box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
    transition: box-shadow .25s ease;
  }
`;

const Image = styled.img`
  width: 512px;
  height: 350px;
  flex-shrink: 0;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1.5rem 6.25rem 1.5rem 2rem;
  background-color: #fff;
`;

const Place = styled.p`
  margin: 0 0 1.5rem;
  color: ${props => props.theme.slateGrey};
  font-family: ${props => props.theme.monaco};
  line-height: 1rem;
  text-transform: uppercase;
`;

const Title = styled.h3`
  margin: 0 0 .5rem;
  color: ${props => props.theme.blackTwo};
  font-size: 2.5rem;
  line-height: 3.5rem;
`;

const Description = styled.p`
  margin: 0;
  color: ${props => props.theme.charcoalGrey};
`;

type CardProps = {
  id: string,
  image: string,
  title: string,
  place: string,
  children: Children,
};

export default ({ id, image, title, place, children }: CardProps) => (
  <Card to={`/complexes/${id}`} title={title}>
    <Image src={image} alt={title} title={title} />
    <Info>
      <Place>{place}</Place>
      <Title>{title}</Title>
      <Description>{children}</Description>
    </Info>
  </Card>
  );
