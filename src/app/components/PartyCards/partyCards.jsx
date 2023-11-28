'use client'

import React, { useState } from 'react';
import {CardParty, Card, CardImage, CardContent, ContentDate, PartyName, Organizer} from './styles'

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