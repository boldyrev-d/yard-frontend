import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import {fonts} from '../../../constants';

const Infrastructure = styled.section`
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

const Title = styled.h2`
  margin: 0 0 1rem;
  font-family: ${fonts.philosopher};
  font-size: 1.5rem;
  line-height: 1.75rem;
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.375rem;

  &:not(:last-child) {
    margin-bottom: .5rem;
  }
`;

export default () => {
  return (
    <Infrastructure>
      <Title>Инфраструктура</Title>
      <Row>
        <Col lg={2}>
          <Text>Бассейн</Text>
          <Text>Частная школа</Text>
        </Col>
        <Col lg={2}>
          <Text>Детский сад</Text>
          <Text>Частная школа</Text>
        </Col>
        <Col lg={2}>
          <Text>Частная школа</Text>
          <Text>Частная школа</Text>
        </Col>
        <Col lg={2}>
          <Text>Бассейн</Text>
        </Col>
        <Col lg={2}>
          <Text>Детский сад</Text>
        </Col>
        <Col lg={2}>
          <Text>Частная школа</Text>
        </Col>
      </Row>
    </Infrastructure>
  );
};
