'use client'

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {CardSlider, Card, CardImage, PrevButton, NextButton, Dots, Dot, DotSelected, CardTextArea, PurchaseButton} from './styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Carousel = ({ photos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [texto, setTexto] = useState();

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === photos.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? photos.length - 1 : prevSlide - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  return (
    <CardSlider>
      <PrevButton onClick={prevSlide}>
        <ArrowBackIosNewIcon />
      </PrevButton>
      <Card>
        <div {...handlers}>
          <CardImage
            src={photos[currentSlide]}
            alt="Events"
          />
        </div>
          <CardTextArea>
            <PurchaseButton>Comprar ingresso</PurchaseButton>
          </CardTextArea>
        {/* <textarea
        placeholder="Escreva um texto sobre a imagem..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      /> */}
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

export default Carousel;