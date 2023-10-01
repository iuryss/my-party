'use client'

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {CardParty, Card, CardImage, CardContent, ContentDate, PartyName, Organizer} from './styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const PartyCards = (props) => {

  return (
    <CardParty>
      <Card>
          <CardImage
            src={props.partyPhoto}
            alt="Party Photo"
          />
          <CardContent>
            <ContentDate>{props.date}</ContentDate>
            <PartyName>{props.partyName}</PartyName>
            <Organizer>{props.organizer}</Organizer>
          </CardContent>
      </Card>
    </CardParty>
  );
};

export default PartyCards;