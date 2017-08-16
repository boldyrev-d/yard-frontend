/* eslint-disable react/prop-types */

/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Children } from 'react';
import { media } from '../../style-utils';

const Card = styled(Link)`
  display: flex;
  margin-bottom: 3rem;

  &:hover {
    box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
    transition: box-shadow .25s ease;
  }

  ${media.mobile`
    flex-direction: column;
    margin-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  `};
`;

const Image = styled.img`
  width: 512px;
  height: 350px;
  flex-shrink: 0;
  object-fit: cover;

  ${media.mobile`
    width: 100%;
    height: auto;
  `};
`;

const Info = styled.div`
  padding: 1.5rem 6.25rem 1.5rem 2rem;
  background-color: #fff;

  ${media.mobile`
    padding: 1rem 1rem 1.5rem;
  `};
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

  ${media.mobile`
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 2.5rem;
  `};
`;

const Description = styled.p`
  margin: 0;
  color: ${props => props.theme.charcoalGrey};
`;

type Props = {
  id: number,
  image: string,
  title: string,
  place: string,
  children: Children,
};

export default ({ id, image, title, place, children }: Props) =>
  (<Card to={`/complexes/${id}`} title={title}>
    <Image src={image} alt={title} title={title} />
    <Info>
      <Place>
        {place}
      </Place>
      <Title>
        {title}
      </Title>
      <Description>
        {children}
      </Description>
    </Info>
  </Card>);
