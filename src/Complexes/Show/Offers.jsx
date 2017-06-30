/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import BasicButton from '../../Button';

const Offers = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: ${props => props.theme.otherGrey};
`;

const SectionTitle = styled.h2`
  margin: 0 0 1.5rem;
  font-family: ${props => props.theme.philosopher};
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-align: center;
`;

const Card = styled.div`
  padding: 1.5rem 2rem;
  background-color: #fff;
`;

const CardTitle = styled.h3`
  margin: 0 0 1.5rem;
  font-family: ${props => props.theme.philosopher};
  font-size: 1.25rem;
  line-height: 1.375rem;
`;

const Feature = styled.div`
  margin-bottom: 1.5rem;
`;

const Title = styled.div`
  margin-bottom: .625rem;
  color: ${props => props.theme.hueGrey};
  line-height: 1.375rem;
`;

const Text = styled.div`
  line-height: 1.375rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const Button = styled(BasicButton)`
  line-height: 1rem;
`;

export default () =>
  (<Offers>
    <Grid>
      <SectionTitle>Предложения в ЖК «Полянка/44»</SectionTitle>
      <Row>
        <Col lg={4}>
          <Card>
            <CardTitle>1-комнатные квартиры</CardTitle>
            <Feature>
              <Title>Площадь</Title>
              <Text>от 59 до 120 м²</Text>
            </Feature>
            <Feature>
              <Title>Стоимость</Title>
              <Text>от 20.3 до 84.2 млн руб</Text>
            </Feature>
            <ButtonWrapper>
              <Button>Посмотреть предложения</Button>
            </ButtonWrapper>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <CardTitle>2-комнатные квартиры</CardTitle>
            <Feature>
              <Title>Площадь</Title>
              <Text>от 59 до 120 м²</Text>
            </Feature>
            <Feature>
              <Title>Стоимость</Title>
              <Text>от 20.3 до 84.2 млн руб</Text>
            </Feature>
            <ButtonWrapper>
              <Button>Посмотреть предложения</Button>
            </ButtonWrapper>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <CardTitle>3-комнатные квартиры</CardTitle>
            <Feature>
              <Title>Площадь</Title>
              <Text>от 59 до 120 м²</Text>
            </Feature>
            <Feature>
              <Title>Стоимость</Title>
              <Text>от 20.3 до 84.2 млн руб</Text>
            </Feature>
            <ButtonWrapper>
              <Button>Посмотреть предложения</Button>
            </ButtonWrapper>
          </Card>
        </Col>
      </Row>
    </Grid>
  </Offers>);
