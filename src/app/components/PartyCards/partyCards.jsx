'use client'

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {CardSlider, Card, CardImage, PrevButton, NextButton, Dots, Dot, DotSelected} from './styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const PartyCards = ({ props }) => {

  return (
    <CardSlider>
      <Card>
          <CardImage
            src={photos[currentSlide]}
            alt="Slide"
          />
      </Card>
        <NextButton onClick={nextSlide}>
            <ArrowForwardIosIcon />
        </NextButton>
      <Dots>
        {photos.map((_, index) => (
          <React.Fragment key={index}>
          {index === currentSlide ? (
            <DotSelected onClick={() => setCurrentSlide(index)} />
          ) : (
            <Dot onClick={() => setCurrentSlide(index)} />
          )}
          </React.Fragment>
         ))}
      </Dots>
    </CardSlider>
  );
};

export default PartyCards;