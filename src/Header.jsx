/* @flow */

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid ${props => props.theme.paleGrey};
`;

const LogoLink = styled(Link)`
  display: inline-block;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

const Nav = styled.nav`text-align: right;`;

const NavLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

export default () =>
  (<Header>
    <Grid>
      <Row between="lg" middle="lg">
        <Col lg={6}>
          <LogoLink to="/" title="Compass">
            <img src={`${PUBLIC_URL}/images/compass-logo.svg`} alt="Compass" title="Compass" />
          </LogoLink>
        </Col>
        <Col lg={6}>
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
