/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import BasicButton from '../../Button';
import { getImageUrl } from '../../utils';
import type { ImageShape } from '../types';
import Pluralizer from '../../components/Pluralizer';
import Carousel from './Carousel';

const Photos = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow-x: auto;
`;

const Photo = styled.img`
  height: 400px;
  cursor: pointer;
`;

const Button = styled(BasicButton)`
  position: absolute;
  display: block;
  margin-top: -3.75rem;
  padding: 0.5rem 1rem;
  font-size: 0.625rem;
  line-height: 0.625rem;
  font-weight: 300;
  background-color: ${props => props.theme.coolBlue};
  color: #fff;
`;

class Gallery extends Component {
  state = {
    carouselIsOpen: false,
    activeImage: 0,
  };

  toggleCarousel = () => {
    this.setState({
      carouselIsOpen: !this.state.carouselIsOpen,
    });
  };

  handleButtonClick = () => {
    this.setState(
      {
        activeImage: 0,
      },
      this.toggleCarousel,
    );
  };

  handleImageClick = (index: number) => {
    this.setState(
      {
        activeImage: index,
      },
      this.toggleCarousel,
    );
  };

  render() {
    const { images, name }: { images: Array<ImageShape>, name: string } = this.props;

    return (
      <div>
        <Photos>
          {images.map((image, index) => (
            <Photo
              key={image.id}
              src={getImageUrl(image.id)}
              alt={name}
              title={name}
              onClick={() => this.handleImageClick(index)}
            />
          ))}
        </Photos>
        <div className="container">
          <Button onClick={this.handleButtonClick}>
            <Pluralizer
              number={images.length}
              one="фотография"
              few="фотографии"
              other="фотографий"
            />
          </Button>
        </div>

        {this.state.carouselIsOpen && (
          <Carousel
            images={images}
            toggleCarousel={this.toggleCarousel}
            activeImage={this.state.activeImage}
            gutter="5vw"
            scaleRatio={1.2}
          />
        )}
      </div>
    );
  }
}

export default Gallery;
