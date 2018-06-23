/* @flow */

import styled from 'styled-components';

export default styled.button`
  padding: 0.75rem 2rem;
  color: #fff;
  font-family: ${({ theme: { fira } }) => fira};
  background-color: ${({ theme: { blackTwo } }) => blackTwo};
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`;
