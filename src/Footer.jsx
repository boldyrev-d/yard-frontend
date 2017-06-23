import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link as RouterLink} from 'react-router-dom';
import styled from 'styled-components';
import arrow from './arrow.svg';

const Footer = styled.footer`
  padding-top: 2rem;
  padding-bottom: 1.75rem;
  color: ${props => props.theme.hueGrey};
  font-size: .875rem;
  font-weight: 300;
  background-color: ${props => props.theme.blackThree};
`;

const Title = styled.h4`
  margin: 0 0 .5rem;
  line-height: 1.4rem;
  color: ${props => props.theme.slateGrey};
`;

const Info = styled.p`
  margin: 0 0 .5rem;
`;

const InfoPhone = Info.extend`
  margin-top: 1rem;
`;

const Divider = styled.hr`
  height: 2px;
  margin-bottom: 1rem;
  color: ${props => props.theme.charcoalGrey};
  background-color: ${props => props.theme.charcoalGrey};
  border: none;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: .5rem;
  }
`;

const Link = styled(RouterLink)`
  color: #fff;
`;

const LinkArrowed = Link.extend`
  position: relative;
  margin-top: 1rem;

  &:after {
    margin-left: .5rem;
    content: url(${arrow});
  }
`;

const Warning = styled.p`
  margin: 6rem 0 0;
  font-size: .6875rem;
  line-height: 1.2rem;
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col lg={2}>
            <Title>ООО «Ярд»</Title>
            <Info>ОГРН 1175074002531</Info>
            <Info>ИНН 5036165365</Info>
            <InfoPhone>+7 (999) 821-14-88</InfoPhone>
          </Col>

          <Col lgOffset={2} lg={2}>
            <Divider/>
            <Title>Жилые комплексы</Title>
            <List>
              <ListItem>
                <Link to="#" title="ВТБ Арена Парк">ВТБ Арена Парк</Link>
              </ListItem>
              <ListItem>
                <Link to="#" title="Садовые кварталы">Садовые кварталы</Link>
              </ListItem>
              <ListItem>
                <Link to="#" title="Резиденция Монэ">Резиденция Монэ</Link>
              </ListItem>
              <ListItem>
                <LinkArrowed to="#" title="Все ЖК Москвы">Все ЖК Москвы</LinkArrowed>
              </ListItem>
            </List>
          </Col>

          <Col lg={2}>
            <Divider/>
            <Title>Компания</Title>
            <List>
              <ListItem>
                <Link to="#" title="Команда">Команда</Link>
              </ListItem>
              <ListItem>
                <Link to="#" title="О компании">О компании</Link>
              </ListItem>
            </List>
          </Col>
        </Row>
        <Row>
          <Col lgOffset={4} lg={8}>
            <Warning>
              Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
            </Warning>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
};
