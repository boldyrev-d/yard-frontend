/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { constructionKinds, quarters, kinds, securityKinds } from '../../dictionaries';
import type { DetailsShape, StatisticsShape } from '../../types';

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
  margin-bottom: .6875rem;
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

const formatPrice = price => (price / 1000000).toFixed(1);

const formatArea = area => Math.round(area);

const formatCeilHeight = height => Math.round(height * 100) / 100;

const formatParkings = area => (!area ? 'Нет' : `${area} м/м`);

type Props = {
  statistics: StatisticsShape,
  details: DetailsShape,
};

export default ({ statistics, details }: Props) => {
  const { propertiesCount, price = {}, totalArea = {} } = statistics;
  const { from = {}, to = {} } = price;
  const {
    constructionKind,
    startQuarter,
    startYear,
    propertyKind,
    commissioningQuarter,
    commissioningYear,
    ceilHeight = {},
    parkings,
    undergroundGarages,
    security,
    maintenanceCosts,
  } = details;

  return (
    <Features>
      <Title>Характеристики</Title>
      <Row>
        <Col lg={4}>
          <Feature>
            <Label>Количество квартир</Label>
            <Value>
              {propertiesCount}
            </Value>
          </Feature>
          <Feature>
            <Label>Статус</Label>
            <Value>
              {kinds[propertyKind]}
            </Value>
          </Feature>
          <Feature>
            <Label>Цены</Label>
            <Value>
              от {formatPrice(from.rub)} до {formatPrice(to.rub)} м²
            </Value>
          </Feature>
          <Feature>
            <Label>Безопасность</Label>
            <Value>
              {securityKinds[security]}
            </Value>
          </Feature>
        </Col>
        <Col lg={4}>
          <Feature>
            <Label>Конструкция корпусов</Label>
            <Value>
              {constructionKinds[constructionKind]}
            </Value>
          </Feature>
          <Feature>
            <Label>Площадь</Label>
            <Value>
              от {formatArea(totalArea.from)} до {formatArea(totalArea.to)} м²
            </Value>
          </Feature>
          <Feature>
            <Label>Высота потолков</Label>
            <Value>
              {formatCeilHeight(ceilHeight.from)} − {formatCeilHeight(ceilHeight.to)} м
            </Value>
          </Feature>
          <Feature>
            <Label>Обслуживание</Label>
            <Value>
              {maintenanceCosts} руб / м² / месяц
            </Value>
          </Feature>
        </Col>
        <Col lg={4}>
          <Feature>
            <Label>Начало строительства</Label>
            <Value>
              {quarters[startQuarter]} квартал {startYear} года
            </Value>
          </Feature>
          <Feature>
            <Label>Конец строительства</Label>
            <Value>
              {quarters[commissioningQuarter]} квартал {commissioningYear} года
            </Value>
          </Feature>
          <Feature>
            <Label>Наземная парковка</Label>
            <Value>
              {formatParkings(parkings)}
            </Value>
          </Feature>
          <Feature>
            <Label>Подземная парковка</Label>
            <Value>
              {formatParkings(undergroundGarages)}
            </Value>
          </Feature>
        </Col>
      </Row>
    </Features>
  );
};
