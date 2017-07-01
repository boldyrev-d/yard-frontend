/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import BasicButton from '../../Button';
import { getImageUrl } from '../../utils';
import type { ImageShape } from '../types';

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

type Props = { images: Array<ImageShape> };

export default ({ images }: Props) =>
  (<div>
    <Photos>
      {images.map(image =>
        <Photo key={image.id} src={getImageUrl(image)} alt="complexImage" title="complexImage" />,
      )}
    </Photos>
    <Grid>
      <Button>41 фотография</Button>
    </Grid>
  </div>);
