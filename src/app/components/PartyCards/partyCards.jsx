'use client'

import React, { useState } from 'react';
import {CardParty, Card, CardImage, CardContent, ContentDate, PartyName, Organizer, CardRowContainer, CardContainerDate, TitleDate, CardInfoContainer} from './styles'

const PartyCards = (props) => {

  return (
    <CardParty>
      <Card>
          <CardImage
            src={props.partyPhoto}
            alt="Party Photo"
          />
          <CardContent>
            <CardRowContainer>
              <CardContainerDate>
                <TitleDate>Mar</TitleDate>
                <ContentDate>{props.date}</ContentDate>
              </CardContainerDate>
              <CardInfoContainer>
                <PartyName>{props.partyName}</PartyName>
                <Organizer>{props.organizer}</Organizer>
              </CardInfoContainer>
            </CardRowContainer>
          </CardContent>
      </Card>
    </CardParty>
  );
};

export default PartyCards;