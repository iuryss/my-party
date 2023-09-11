'use client'

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from '../../styles/cardSlide.module.css';

const CardSlider = ({ photos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className={styles.cardSlider}>
      <div className={styles.card}>
        <div {...handlers}>
          <img
            className={styles.cardImage}
            src={photos[currentSlide]}
            alt="Slide"
          />
          <button className={styles.prevButton} onClick={prevSlide}>
            Previous
          </button>
          <button className={styles.nextButton} onClick={nextSlide}>
            Next
          </button>
        </div>
      </div>
      <div className={styles.dots}>
        {photos.map((_, index) => (
          <span
            key={index}
            className={`${index === currentSlide ? styles.dotSelected : styles.dot}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
