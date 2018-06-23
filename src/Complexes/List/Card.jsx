/* eslint-disable react/prop-types */

/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Children } from 'react';
import { media } from '../../style-utils';

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.25s ease;
  }

  ${media.lg`
    flex-direction: row;
    margin-bottom: 2rem;
    padding-left: 0;
    padding-right: 0;
  `};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  object-fit: cover;

  ${media.lg`
    width: 512px;
    height: 350px;
  `};
`;

const Info = styled.div`
  padding: 1rem 1rem 1.5rem;
  background-color: #fff;

  ${media.lg`
    padding: 1.5rem 6.25rem 1.5rem 2rem;
  `};
`;

const Place = styled.p`
  margin: 0 0 1.5rem;
  color: ${({ theme: { slateGrey } }) => slateGrey};
  font-family: ${({ theme: { monaco } }) => monaco};
  line-height: 1rem;
  text-transform: uppercase;
`;

const Title = styled.h3`
  margin: 0 0 1rem;
  color: ${({ theme: { blackTwo } }) => blackTwo};
  font-size: 2rem;
  line-height: 2.5rem;

  ${media.lg`
    margin-bottom: .5rem;
    font-size: 2.5rem;
    line-height: 3.5rem;
  `};
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme: { charcoalGrey } }) => charcoalGrey};
`;

type Props = {
  id: number,
  image: string,
  title: string,
  place: string,
  children: Children,
};

export default ({
  id, image, title, place, children,
}: Props) => (
  <Card to={`/complexes/${id}`} title={title}>
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
  </Card>
);
