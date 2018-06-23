/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from './style-utils';

const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid ${({ theme: { paleGrey } }) => paleGrey};
`;

const LogoLink = styled(Link)`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;

  ${media.sm`
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  `};
`;

const Logo = styled.img`
  width: auto;
  height: 1rem;

  ${media.sm`
    height: auto;
  `};
`;

const Nav = styled.nav`
  text-align: right;
  display: none;

  ${media.sm`
    display: block;
  `};
`;

const NavLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

export default () => (
  <Header>
    <div className="container">
      <div className="row between-xs middle-xs">
        <div className="col-xs-12 col-sm-6">
          <LogoLink to="/" title="Compass">
            <Logo src={`${PUBLIC_URL}/images/compass-logo.svg`} alt="Compass" title="Compass" />
          </LogoLink>
        </div>
        <div className="col-xs-12 col-sm-6">
          <Nav>
            <NavLink to="#" title="Купить">
              Купить
            </NavLink>
            <NavLink to="#" title="Снять">
              Снять
            </NavLink>
            <NavLink to="#" title="Наши агенты">
              Наши агенты
            </NavLink>
          </Nav>
        </div>
      </div>
    </div>
  </Header>
);
