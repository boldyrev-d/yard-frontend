/* @flow */

import React from 'react';
import styled from 'styled-components';

const Infrastructure = styled.section`
  padding-top: 2rem;
  padding-bottom: 3.5rem;
`;

const Title = styled.h2`
  margin: 0 0 1rem;
  font-family: ${({ theme: { philosopher } }) => philosopher};
  font-size: 1.5rem;
  line-height: 1.75rem;
`;

const Text = styled.p`
  margin: 0 0 0.5rem;
  line-height: 1.375rem;
`;

export default () => (
  <Infrastructure>
    <Title>
Инфраструктура
    </Title>
    <div className="row">
      <div className="col-lg-2">
        <Text>
Бассейн
        </Text>
      </div>
      <div className="col-lg-2">
        <Text>
Частная школа
        </Text>
      </div>
      <div className="col-lg-2">
        <Text>
Детский сад
        </Text>
      </div>
      <div className="col-lg-2">
        <Text>
Частная школа
        </Text>
      </div>
      <div className="col-lg-2">
        <Text>
Частная школа
        </Text>
      </div>
      <div className="col-lg-2">
        <Text>
Частная школа
        </Text>
      </div>
      <div className="col-lg-2">
        <Text>
Бассейн
        </Text>
      </div>
      <div className="col-lg-2">
        <Text>
Детский сад
        </Text>
      </div>
      <div className="col-lg-2">
        <Text>
Частная школа
        </Text>
      </div>
    </div>
  </Infrastructure>
);
