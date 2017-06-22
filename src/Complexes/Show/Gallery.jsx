import React from 'react';
import styled from 'styled-components';
import {Grid} from 'react-flexbox-grid';
import {Button as BasicButton} from '../../Button';

const Photos = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow-x: auto;
`;

const Photo = styled.img`
  height: 400px;
`;

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
`
export default () => {
  return (
    <div>
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
    </div>
  )
};
