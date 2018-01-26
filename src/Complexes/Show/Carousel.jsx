/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { getImageUrl } from '../../utils';
import type { ImageShape } from '../types';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(17, 17, 17, 0.9);
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  padding-bottom: calc(0.8125 * ${props => props.gutter});
  padding-top: ${props => props.gutter};
`;

const Images = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  max-width: 100vw;
  will-change: transform;
  transform: translate(0, -50%);

  @media (min-width: 64rem) {
    position: relative;
    top: auto;
    will-change: auto;
    transform: none;
  }
`;

const Image = styled.img`
  max-height: 100vh;
  max-width: 80%;
  transition: transform 0.25s ease-out;
  will-change: transform, opacity;
  transform: ${props => props.transform};
  transform-origin: center bottom;
  opacity: ${props => props.opacity};
  cursor: pointer;

  @media (min-width: 64rem) {
    max-height: calc(
      100vh - ${props => props.gutter} - 0.8125 * ${props => props.gutter} - 2.875rem
    );
  }
`;

const Counter = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  display: inline-block;
  padding: 0.125rem 0.25rem;
  font-weight: 300;
  line-height: 1.375;
  color: ${props => props.theme.hueGrey};
  background-color: rgba(17, 17, 17, 0.9);
  will-change: transform, text-shadow;
  transform: translate(-50%, 0);

  @media (min-width: 64rem) {
    position: relative;
    bottom: auto;
    margin-top: 1.5rem;
    padding: 0;
    will-change: auto;
    transform: none;
    text-shadow: none;
    background: none;
  }
`;

function getTransform(i: number, active: number, scaleRatio: number, gutter: string): string {
  const activeShiftX: string = `50vw - 50% - ${active * 100}%`;

  if (i === active) {
    return `translateX(calc(${activeShiftX}))`;
  }
  return `translateX(calc(${activeShiftX} + ${i - active} * ${gutter})) scaleY(${1 / scaleRatio})`;
}

class Carousel extends Component {
  state = {
    activeImage: this.props.activeImage,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  setTransform = (index: number): Object => {
    if (index < this.state.activeImage) {
      return {
        transform: `translate(${-80 * (this.state.activeImage - index)}%)`,
        left: 0,
        opacity: 0.5,
        maxHeight: 'calc(80vh / 1.2)',
      };
    } else if (index > this.state.activeImage) {
      return {
        transform: `translate(${80 * (index - this.state.activeImage)}%)`,
        right: 0,
        opacity: 0.5,
        maxHeight: 'calc(80vh / 1.2)',
      };
    }

    return { transform: 'translate(-50%)', left: '50%' };
  };

  slideImageRight = () => {
    if (this.state.activeImage === this.props.images.length - 1) {
      this.setState({ activeImage: 0 });
    } else {
      this.setState({ activeImage: this.state.activeImage + 1 });
    }
  };

  slideImageLeft = () => {
    if (this.state.activeImage === 0) {
      this.setState({ activeImage: this.props.images.length - 1 });
    } else {
      this.setState({ activeImage: this.state.activeImage - 1 });
    }
  };

  handleKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === 'ArrowRight') this.slideImageRight();
    if (ev.key === 'ArrowLeft') this.slideImageLeft();
    if (ev.key === 'Escape') this.props.toggleCarousel();
  };

  render() {
    const { activeImage }: { activeImage: number } = this.state;
    const {
      images,
      toggleCarousel,
      gutter = '5vw',
      scaleRatio = 1.2,
    }: {
      images: Array<ImageShape>,
      toggleCarousel: Function,
      gutter: string,
      scaleRatio: number,
    } = this.props;

    return (
      <Backdrop onClick={toggleCarousel}>
        <Wrapper gutter={gutter}>
          <Images>
            {images.map((image, index) => (
              <Image
                key={image.id}
                src={getImageUrl(image.id)}
                gutter={gutter}
                transform={getTransform(index, activeImage, scaleRatio, gutter)}
                onClick={(ev) => {
                  ev.stopPropagation();

                  if (index >= this.state.activeImage) {
                    this.slideImageRight();
                  } else {
                    this.slideImageLeft();
                  }
                }}
              />
            ))}
          </Images>
          <Counter>
            {activeImage + 1}/{images.length}
          </Counter>
        </Wrapper>
      </Backdrop>
    );
  }
}

export default Carousel;
