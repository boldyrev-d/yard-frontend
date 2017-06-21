import React from 'react';
import styled from 'styled-components';
import {Grid} from 'react-flexbox-grid';
import {colors} from '../../constants';
import {Button as BasicButton} from '../../Button';

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

const Button = styled(BasicButton)`
  position: relative;
  display: block;
  margin-top: -3.75rem;
  padding: .5rem 1rem;
  font-size: .625rem;
  line-height: .625rem;
  font-weight: 300;
  background-color: ${colors.coolBlue};
  color: #fff;
`
export default () => {
  return (
    <Gallery>
      <Photos>
        <Photo src={`${process.env.PUBLIC_URL}/images/complexImage1.png`} alt="complexImage1" title="complexImage1" />
        <Photo src={`${process.env.PUBLIC_URL}/images/complexImage2.png`} alt="complexImage2" title="complexImage2" />
        <Photo src={`${process.env.PUBLIC_URL}/images/complexImage3.png`} alt="complexImage3" title="complexImage3" />
        <Photo src={`${process.env.PUBLIC_URL}/images/complexImage4.png`} alt="complexImage4" title="complexImage4" />
        <Photo src={`${process.env.PUBLIC_URL}/images/complexImage5.png`} alt="complexImage5" title="complexImage5" />
      </Photos>
      <Grid>
        <Button>41 фотография</Button>
      </Grid>
    </Gallery>
  )
};
