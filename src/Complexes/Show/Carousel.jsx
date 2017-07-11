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
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  max-width: 100%;
  max-height: 80vh;
  transition: all .3s ease-in-out;
`;

const Counter = styled.div`
  height: 10vh;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.hueGrey};
`;

class Carousel extends Component {
  state = {
    activeImage: 0,
  };

  setTransform = (index) => {
    if (index < this.state.activeImage) {
      return {
        transform: `translate(${-80 * (this.state.activeImage - index)}%)`,
        left: 0,
        maxHeight: 'calc(80vh / 1.2)',
      };
    } else if (index > this.state.activeImage) {
      return {
        transform: `translate(${80 * (index - this.state.activeImage)}%)`,
        right: 0,
        maxHeight: 'calc(80vh / 1.2)',
      };
    }

    return { transform: 'translate(-50%)', left: '50%' };
  };

  slideImage = (index) => {
    if (index < this.state.activeImage) {
      this.setState({
        activeImage: this.state.activeImage - 1,
      });
    } else {
      this.setState({
        activeImage: this.state.activeImage + 1,
      });
    }
  };

  render() {
    const { activeImage } = this.state;
    const { images, toggleCarousel } = this.props;

    return (
      <Backdrop onClick={toggleCarousel}>
        <Wrapper>
          {images.map((image, index) =>
            (<Image
              key={image.id}
              src={getImageUrl(image, 2048)}
              style={this.setTransform(index)}
              onClick={(e) => {
                e.stopPropagation();
                this.slideImage(index);
              }}
            />),
          )}
        </Wrapper>
        <Counter>
          {activeImage + 1}/{images.length}
        </Counter>
      </Backdrop>
    );
  }
}

export default Carousel;
