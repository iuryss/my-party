import React, { useState } from "react";
import cardImage from "../../../../assets/photo2.jpg";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, Card, Text, CardContent, CardImage, RightArrow, ArrowBody, ArrowHead, BottomContent } from "./styles";

const CardsEvents = (props) => {

  return (
    <Card>
      <CardImage
        src={'https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?w=740&t=st=1694994819~exp=1694995419~hmac=d584670f0722f4044a6da3d30d254909a2258cf042d6016f92e3e0f80258d2cd'}
        alt="Descrição da imagem"
        className="card-image"
      />
      <CardContent>
        <Text>{props.text}</Text>
        <BottomContent>
          <Button>QUERO IR!</Button>
          <RightArrow >
            <ArrowBody />
            <KeyboardArrowRightIcon fontSize="large" style={{position: "absolute", right: 38}} />
          </RightArrow>
        </BottomContent>
      </CardContent>
    </Card>
  );
};

export default CardsEvents;
