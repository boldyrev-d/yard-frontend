/* @flow */

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from './style-utils';

const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid ${props => props.theme.paleGrey};

  ${media.mobile`
    padding-left: 1rem;
    padding-right: 1rem;
  `};
`;

const LogoLink = styled(Link)`
  display: flex;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  ${media.mobile`
    margin-top: 1rem;
    margin-bottom: 1rem;
  `};
`;

const Logo = styled.img`
  ${media.mobile`
    width: auto;
    height: 1rem;
  `};
`;

const Nav = styled.nav`
  text-align: right;

  ${media.mobile`
    display: none;
  `};
`;

const NavLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

export default () =>
  (<Header>
    <Grid>
      <Row between="xs" middle="xs">
        <Col xs={12} sm={6}>
          <LogoLink to="/" title="Compass">
            <Logo src={`${PUBLIC_URL}/images/compass-logo.svg`} alt="Compass" title="Compass" />
          </LogoLink>
        </Col>
        <Col xs={12} sm={6}>
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
        </Col>
      </Row>
    </Grid>
  </Header>);
