import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import logo from './compass-logo.svg';

class Header extends Component {
  render() {

    const CSSVariables = styled.div`
      --pale-grey: #eaebf0;
    `;

    const Header = styled.header`
      background-color: #fff;
      border-bottom: 1px solid var(--pale-grey);
    `;

    const LogoLink = styled.a`
      display: inline-block;
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
    `;

    const Nav = styled.nav`
      text-align: right;
    `;

    const NavLink = styled.a`
      &:not(:last-child) {
        margin-right: 2rem;
      }
    `;

    return (
      <CSSVariables>
        <Header>
          <Grid>
            <Row between="lg" middle="lg">
              <Col lg>
                <LogoLink href="/" title="Compass">
                  <img src={logo} alt="Compass" title="Compass" />
                </LogoLink>
              </Col>
              <Col lg>
                <Nav>
                  <NavLink href="#" title="Купить">Купить</NavLink>
                  <NavLink href="#" title="Снять">Снять</NavLink>
                  <NavLink href="#" title="Наши агенты">Наши агенты</NavLink>
                </Nav>
              </Col>
            </Row>
          </Grid>
        </Header>
      </CSSVariables>
    );
  }
}

export default Header;
