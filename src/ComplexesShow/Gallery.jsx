import React from 'react';
import styled from 'styled-components';
import {Grid} from 'react-flexbox-grid';
import {colors, fonts} from '../constants';
import Photo1 from './Bitmap1.png';
import Photo2 from './Bitmap2.png';
import Photo3 from './Bitmap3.png';
import Photo4 from './Bitmap4.png';
import Photo5 from './Bitmap5.png';

const Gallery = styled.section`
  height: 400px;
`;

const Photos = styled.div`
  display: flex;
  overflow-x: auto;
  height: 400px;
`;

const Photo = styled.img`
  max-height: 400px;
`;

const Button = styled.button`
  position: relative;
  display: block;
  margin-top: -3.75rem;
  padding: .5rem 1rem;
  font-family: ${fonts.fira};
  font-size: .625rem;
  line-height: .625rem;
  font-weight: 300;
  background-color: ${colors.coolBlue};
  color: #fff;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`;

export default () => {
  return (
    <Gallery>
      <Photos>
        <Photo src={Photo1} alt="Photo1" title="Photo1" />
        <Photo src={Photo2} alt="Photo2" title="Photo2" />
        <Photo src={Photo3} alt="Photo3" title="Photo3" />
        <Photo src={Photo4} alt="Photo4" title="Photo4" />
        <Photo src={Photo5} alt="Photo5" title="Photo5" />
        <Photo src={Photo1} alt="Photo1" title="Photo1" />
      </Photos>
      <Grid>
        <Button>41 фотография</Button>
      </Grid>
    </Gallery>
  )
};
