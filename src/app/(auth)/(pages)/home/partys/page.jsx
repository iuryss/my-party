'use client'

import React, {useState} from "react";
import Navbar from "../../../../components/NavBar/navBar";
import Carousel from '../../../../components/Carousel/carousel';
import SearchBar from '../../../../components/SearchBar/searchBar';
import PartyCards from '../../../../components/PartyCards/partyCards';
import {ContainerInfo, MainContainer, SectionMyParty, TitleInfo, TextInfo, ButtonSection, SectionCards,
CardsSectionTitle, TitleArea, SectionPartys, SectionHeader, SectionRateUs, ImageBackground, PartysDescription,
SectionTitle, StyledTicket, Frame, VuesaxOutline, TerAFeira, Frame2, VuesaxOutlineLocation, RuaLoremipsum,FieldEmail, OverlapGroup, TextWrapper3, CTA, TextWrapper4, Copyright, TextWrapper5, TicketContainer, SectionTicket, CardPuchaseTItle, ContainerCardsTicket, Div, Column, Card, TitleContainer, SpaceContainer, TicketTipe, PriceTicket, OfferDescription, OfferDescription2, Div2, Column2, Card2, OfferDescription4, Div3, Button2, Column3, Card3, OfferDescription5, OfferDescription6, Div4, Button1, CheckItemsContainer, MapArea} from './styles'
import Link from "next/link";
import { defaultTexts } from "../../../../../../utils/texts";
import Button from "../../../../components/Button/button";
import TicketBox from "../../../../components/TicketBox/ticketBox.jsx";
import CardsEvents from "../../../../components/Cards/index.jsx";
import CardRateUs from "../../../../components/CardRateUs/index.jsx";
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import Checkbox from '@mui/material/Checkbox';
import Footer from '../../../../components/Footer/footer.jsx';
import CheckItems from '../../../../components/CheckItem/CheckItem.jsx';
import Map from "../../../../components/Map/map.jsx";


export default function partys () {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
     const cardsRateUs = [
      {
        title: 'Flowerss',
        location: 'Fortaleza, Ceara',
        description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        imageUrl: 'caminho_da_imagem_1.jpg',
      },
      {
        title: 'MP Halloween',
        location: 'Fortaleza, Ceara',
        description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        imageUrl: 'caminho_da_imagem_1.jpg',
      },
      {
        title: 'Trevo',
        location: 'Fortaleza, Ceara',
        description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        imageUrl: 'caminho_da_imagem_1.jpg',
      },
   ];

   const cardsData = [
    {
      text: 'Noite inteira',
    },
    {
      text: 'OpenBar',
    },
    {
      text: 'Alimentação',
    },
    {
      text: 'Atrações em alta',
    },
    {
      text: 'Dance-off with a star guest',
    },
 ];

 const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

    return(
        <>
        <ImageBackground>
         <SectionMyParty>
           <Navbar />
             <MainContainer>
                <ContainerInfo>
                  <TitleInfo>MYPARTY</TitleInfo>
                  <TextInfo>{defaultTexts}</TextInfo>
                  <ButtonSection>
                    <Button padding={"1.2em 1.8em"} buttonText={'COMPRAR INGRESSO'} radius={"30px"} buttonColor={'#f5167ed9'} border={'none'} />
                  </ButtonSection>
                </ContainerInfo>
                <TicketBox />
            </MainContainer>
          </SectionMyParty>
          </ImageBackground>
          <SectionPartys>
            <SectionHeader>
              <SectionTitle>
                <EastIcon style={{color:"#FE772D", fontSize: 60}} />
                <CardsSectionTitle>MY PARTY</CardsSectionTitle>
                <KeyboardBackspaceIcon style={{color:"#FE772D", fontSize: 60}} />
              </SectionTitle>
              <PartysDescription>
                {defaultTexts}
                <StyledTicket>
                  <Frame>
                    <VuesaxOutline />
                  </Frame>
                  <TicketContainer>
                    <TerAFeira>Terça-feira, 03 Dezembro 2023, 19:00</TerAFeira>
                    <Frame2>
                      <VuesaxOutlineLocation />
                      <RuaLoremipsum>Rua Loremipsum, Castelão, Fortaleza</RuaLoremipsum>
                    </Frame2>
                  </TicketContainer>
                </StyledTicket>
                <CheckItemsContainer>
                {cardsData.map((card, index) => (
                  <CheckItems
                    key={index}
                    text={card.text}
                  />
               ))}
              </CheckItemsContainer>
              </PartysDescription>
            </SectionHeader>
          </SectionPartys>
          {/* <SectionEventsRequest>
            <TitleRequest>Solicite seu evento!</TitleRequest>
            <InfoRequest>Lorem impsum dolor sit amet, consectetur adipiscing elit</InfoRequest>
            <Button padding={"1.2em 8em"} buttonText={'Solicitar'} radius={"30px"} buttonColor={'#f5167ed9'} border={'none'} />
          </SectionEventsRequest> */}
          {/* <TitleArea>
            <CardsSectionTitle>Avalie</CardsSectionTitle>
          </TitleArea> */}
          <SectionTicket>
      <CardPuchaseTItle>Escolha seu ingresso</CardPuchaseTItle>
      <ContainerCardsTicket>
        <Div>
          <Column>
            <Card>
              <TitleContainer>
                <SpaceContainer>
                  <TicketTipe>Meia-Entrada Front</TicketTipe>
                </SpaceContainer>
              </TitleContainer>
              <PriceTicket>R$100</PriceTicket>
              <OfferDescription>Blood Drink</OfferDescription>
              <OfferDescription2>Haunted House Tour</OfferDescription2>
              <Div2>Horror Movie Marathon</Div2>
              <Button1>COMPRAR</Button1>
            </Card>
          </Column>
          <Column2>
            <Card2>
              <TitleContainer>
                <SpaceContainer>
                  <TicketTipe>Entrada Front</TicketTipe>
                </SpaceContainer>
              </TitleContainer>
              <PriceTicket>R$200</PriceTicket>
              <OfferDescription>Blood Drink</OfferDescription>
              <OfferDescription2>Haunted House Tour</OfferDescription2>
              <Div2>Horror Movie Marathon</Div2>
              <Button2>COMPRAR</Button2>
            </Card2>
          </Column2>
          <Column3>
            <Card3>
            <TitleContainer>
                <SpaceContainer>
                  <TicketTipe>OPENBAR</TicketTipe>
                </SpaceContainer>
              </TitleContainer>
              <PriceTicket>R$300</PriceTicket>
              <OfferDescription>Blood Drink</OfferDescription>
              <OfferDescription2>Haunted House Tour</OfferDescription2>
              <Div2>Horror Movie Marathon</Div2>
              <Button1>COMPRAR</Button1>
            </Card3>
          </Column3>
        </Div>
      </ContainerCardsTicket>
    </SectionTicket>
         <TitleArea>
            <CardsSectionTitle>LOCALIZAÇÃO</CardsSectionTitle>
          </TitleArea>
          <MapArea>
            <Map location={location}/>
          </MapArea>
          <Footer />
        </>
    )
}