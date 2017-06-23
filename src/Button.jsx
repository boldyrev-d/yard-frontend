import styled from 'styled-components';

export const Button = styled.button`
  padding: .75rem 2rem;
  color: #fff;
  font-family: ${props => props.theme.fira};
  background-color: ${props => props.theme.blackTwo};
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`;
