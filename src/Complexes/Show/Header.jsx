import React from 'react';
import styled from 'styled-components';
import {Grid} from 'react-flexbox-grid';
import {colors, fonts} from '../../constants';

const Header = styled.section`
  padding: 1.5rem 0 1rem;
  background-color: #fff;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h1`
  margin: 0;
  font-family: ${fonts.philosopher};
  font-size: 2rem;
  line-height: 2rem;
`;

const Address = styled.small`
  display: block;
  margin-top: .5rem;
  font-family: ${fonts.fira};
  font-size: .875rem;
  font-weight: 300;
  color: ${colors.hueGrey};
`;

const Button = styled.button`
  padding: .5rem 1rem;
  font-family: ${fonts.fira};
  font-size: .625rem;
  line-height: .625rem;
  font-weight: 300;
  background-color: transparent;
  border: 1px solid ${colors.anotherGrey};
  border-radius: 2px;
  color: ${colors.coolBlue};
  outline: none;
  cursor: pointer;
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Inner>
          <div>
            <Title>Жилой комплекс «Полянка/44»</Title>
            <Address>Район Якиманка, улица Большая Полянка, дом 44 • 119180</Address>
          </div>
          <Button>В избранное</Button>
        </Inner>
      </Grid>
    </Header>
  )
};
