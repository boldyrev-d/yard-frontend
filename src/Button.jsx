import React from 'react';
import styled from 'styled-components';
import {colors, fonts} from './constants';

const Button = styled.button`
  padding: .75rem 2rem;
  color: #fff;
  font-family: ${fonts.fira};
  background-color: ${colors.blackTwo};
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`;

export default (props) => {
  return (
    <Button>{props.children}</Button>
  );
};
