/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { getImageUrl } from '../../utils';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, .9);
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  z-index: 200;
`;

const Image = styled.img`
  position: absolute;
  z-index: 300;
  opacity: 1;
  top: 50%;
  left: 50%;
  max-width: 80vw;
  max-height: 80vh;
  transform: translate(-50%, -50%);
`;

const Counter = styled.div`
  text-align: center;
  line-height: 22px;
  color: ${props => props.theme.hueGrey};
`;

class Carousel extends Component {
  state = {
    activeImage: 0,
  };

  render() {
    const { activeImage } = this.state;
    const { images } = this.props;

    const imagesComponent = images.map((image) => {
      console.log();
      return <Image key={image.id} src={getImageUrl(image, 2048)} />;
    });

    return (
      <Backdrop onClick={this.props.toggleCarousel}>
        <Wrapper>
          {imagesComponent}
        </Wrapper>
        <Counter>
          {activeImage + 1}/{images.length}
        </Counter>
      </Backdrop>
    );
  }
}

export default Carousel;
