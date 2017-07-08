/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
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

const Photo = styled.img`height: 400px;`;

const Button = styled(BasicButton)`
  position: absolute;
  display: block;
  margin-top: -3.75rem;
  padding: .5rem 1rem;
  font-size: .625rem;
  line-height: .625rem;
  font-weight: 300;
  background-color: ${props => props.theme.coolBlue};
  color: #fff;
`;

class Gallery extends Component {
  state = {
    carouselIsOpen: false,
  };

  toggleCarousel = () => {
    this.setState({
      carouselIsOpen: !this.state.carouselIsOpen,
    });
  };

  render() {
    const { images } = this.props;

    return (
      <div>
        <Photos>
          {images.map(image =>
            (<Photo
              key={image.id}
              src={getImageUrl(image)}
              // TODO: add normal alt
              alt="complexImage"
              title="complexImage"
            />),
          )}
        </Photos>
        <Grid>
          <Button onClick={this.toggleCarousel}>
            <Pluralizer
              number={images.length}
              one="фотография"
              few="фотографии"
              other="фотографий"
            />
          </Button>
        </Grid>

        {this.state.carouselIsOpen &&
          <Carousel images={images} toggleCarousel={this.toggleCarousel} />}
      </div>
    );
  }
}

export default Gallery;
