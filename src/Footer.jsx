/* eslint-disable jsx-a11y/anchor-is-valid */
/* @flow */

// TODO: fix mobile

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import arrow from './images/arrow.svg';
import { media } from './style-utils';

const Footer = styled.footer`
  padding-top: 2rem;
  padding-bottom: 3rem;
  color: ${({ theme: { hueGrey } }) => hueGrey};
  font-size: 0.875rem;
  font-weight: 300;
  background-color: ${({ theme: { blackThree } }) => blackThree};

  ${media.lg`
    padding-bottom: 1.75rem;
  `};
`;

const Title = styled.h4`
  margin: 0 0 0.5rem;
  line-height: 1.4rem;
  color: ${({ theme: { slateGrey } }) => slateGrey};
`;

const Info = styled.p`
  margin: 0 0 0.5rem;
`;

const InfoPhone = Info.extend`
  margin-top: 1rem;
`;

const Divider = styled.hr`
  height: 2px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme: { charcoalGrey } }) => charcoalGrey};
  background-color: ${({ theme: { charcoalGrey } }) => charcoalGrey};
  border: none;

  ${media.lg`
    margin-top: 0;
  `};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Link = styled(RouterLink)`
  color: #fff;
`;

const LinkArrowed = Link.extend`
  position: relative;
  margin-top: 1rem;

  &:after {
    margin-left: 0.5rem;
    content: url(${arrow});
  }
`;

const Warning = styled.p`
  margin: 3rem 0 0;
  font-size: 0.6875rem;
  line-height: 1.2rem;

  ${media.lg`
    margin-top: 6rem;
  `};
`;

export default () => (
  <Footer>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-2">
          <Title>
ООО «Ярд»
          </Title>
          <Info>
ОГРН 1175074002531
          </Info>
          <Info>
ИНН 5036165365
          </Info>
          <InfoPhone>
+7 (999) 821-14-88
          </InfoPhone>
        </div>

        <div className="col-xs-12 col-lg-2 col-lg-offset-2">
          <Divider />
          <Title>
Жилые комплексы
          </Title>
          <List>
            <ListItem>
              <Link to="#" title="ВТБ Арена Парк">
                ВТБ Арена Парк
              </Link>
            </ListItem>
            <ListItem>
              <Link to="#" title="Садовые кварталы">
                Садовые кварталы
              </Link>
            </ListItem>
            <ListItem>
              <Link to="#" title="Резиденция Монэ">
                Резиденция Монэ
              </Link>
            </ListItem>
            <ListItem>
              <LinkArrowed to="#" title="Все ЖК Москвы">
                Все ЖК Москвы
              </LinkArrowed>
            </ListItem>
          </List>
        </div>

        <div className="col-xs-12 col-lg-2">
          <Divider />
          <Title>
Компания
          </Title>
          <List>
            <ListItem>
              <Link to="#" title="Команда">
                Команда
              </Link>
            </ListItem>
            <ListItem>
              <Link to="#" title="О компании">
                О компании
              </Link>
            </ListItem>
          </List>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-lg-8 col-lg-offset-4">
          <Warning>
            Любая информация, представленная на данном сайте, носит исключительно информационный
            характер и ни при каких условиях не является публичной офертой, определяемой положениями
            статьи 437 ГК РФ. © ООО «Ярд», 2017
          </Warning>
        </div>
      </div>
    </div>
  </Footer>
);
