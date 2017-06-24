import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

const Features = styled.section`
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

const Title = styled.h2`
  margin: 0 0 1.125rem 0;
  font-family: ${props => props.theme.philosopher};
  font-size: 1.5rem;
  line-height: 1.75rem;
`;

const Feature = styled.dl`
  display: flex;
  margin: 0;
  line-height: 1.375rem;

  &:not(:last-child) {
    margin-bottom: .6875rem;
  }
`;

const Label = styled.dt`
  width: 50%;
  color: ${props => props.theme.hueGrey};
`;

const Value = styled.dd`
  width: 50%;
  margin-left: 0;
  font-weight: 500;
`;

export default () =>
  (<Features>
    <Title>Характеристики</Title>
    <Row>
      <Col lg={4}>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>1 503</Value>
        </Feature>
        <Feature>
          <Label>Статус:</Label>
          <Value>Квартиры</Value>
        </Feature>
        <Feature>
          <Label>Цены:</Label>
          <Value>от 5.3 до 143.5 млн</Value>
        </Feature>
      </Col>
      <Col lg={4}>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>1 503</Value>
        </Feature>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>1 503</Value>
        </Feature>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>1 503</Value>
        </Feature>
      </Col>
      <Col lg={4}>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>1 503</Value>
        </Feature>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>1 503</Value>
        </Feature>
        <Feature>
          <Label>Количество квартир:</Label>
          <Value>1 503</Value>
        </Feature>
      </Col>
    </Row>
  </Features>);
