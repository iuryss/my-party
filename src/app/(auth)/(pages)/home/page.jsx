'use client'

import React, {useState} from "react";
import Navbar from "../../../components/NavBar/navBar";
import Carousel from '../../../components/Carousel/carousel';
import SearchBar from '../../../components/SearchBar/searchBar';
import PartyCards from '../../../components/PartyCards/partyCards';
import {ContainerInfo, MainContainer, PartysContainer, SectionMyParty, TitleInfo, TextInfo, ButtonSection, SectionCards, CardsSectionTitle, TitleArea, SectionPartys, StyledSelect, SelectContainer, SectionHeader, ButtonMoreContent, SectionEventsRequest, TitleRequest, InfoRequest, SectionRateUs} from './styles'
import Link from "next/link";
import { defaultTexts } from "../../../../../utils/texts";
import Button from "../../../components/Button/button";
import SearchBox from "../../../components/SearchBox/searchBox";
import CardsEvents from "../../../components/Cards/index.jsx";
import CardRateUs from "../../../components/CardRateUs/index.jsx";


export default function home () {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
    function generateRandomDate() {
        const day = Math.floor(Math.random() * 30) + 1;
        const month = Math.floor(Math.random() * 12) + 1;
        const year = Math.floor(Math.random() * 10) + 2015;
        return `${day}/${month}/${year}`;
      }
    const cardsData = [
        {
          text: 'My Party',
          imageUrl: 'caminho_da_imagem_1.jpg',
        },
        {
          text: 'My Party',
          imageUrl: 'caminho_da_imagem_2.jpg',
        },
        {
          text: 'My Party',
          imageUrl: 'caminho_da_imagem_3.jpg',
        },
     ];

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

    const eventsPhotos = [
        'https://img.freepik.com/fotos-gratis/a-luz-brilhante-do-palco-ilumina-os-fas-de-rock-gerados-pela-ia_188544-37983.jpg?w=1060&t=st=1694986456~exp=1694987056~hmac=ba92bf0b39761649b8241ac88aba6fb4599dce7a3a3917ea3e91826b4ef1cca3',
        'https://as1.ftcdn.net/v2/jpg/06/32/25/48/1000_F_632254843_tbDPM5EV6LGbeLNyU9DJso03qeXeX3zK.jpg',
        'https://liftlearning.com/wp-content/uploads/2020/09/default-image.png',
      ]

      const mockupPartys = [
        {
          partyName: "Festa de Verão",
          partyPhoto: "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?w=740&t=st=1694994819~exp=1694995419~hmac=d584670f0722f4044a6da3d30d254909a2258cf042d6016f92e3e0f80258d2cd",
          date: generateRandomDate(),
          titulo: "Festa de Verão 2023",
          organizer: "Organizador A",
        },
        {
          partyName: "Festa de Halloween",
          partyPhoto: "https://img.freepik.com/premium-vector/flat-brazilian-carnival-illustration_23-2149223844.jpg?w=740",
          date: generateRandomDate(),
          titulo: "Noite Assustadora",
          organizer: "Organizador B",
        },
        {
          partyName: "Festa de Aniversário",
          partyPhoto: "https://img.freepik.com/free-psd/abstract-music-poster-template-with-colorful-wavy-shapes_1361-4187.jpg?w=360&t=st=1694994853~exp=1694995453~hmac=03ddc742ee667c29a3c247fadad07e0cae23080ab3431de3eb3c5d28d71bcb46",
          date: generateRandomDate(),
          titulo: "Aniversário Surpresa",
          organizer: "Organizador C",
        },
        {
          partyName: "Festa de Verão",
          partyPhoto: "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?w=740&t=st=1694994819~exp=1694995419~hmac=d584670f0722f4044a6da3d30d254909a2258cf042d6016f92e3e0f80258d2cd",
          date: generateRandomDate(),
          titulo: "Festa de Verão 2023",
          organizer: "Organizador A",
        },
        {
          partyName: "Festa de Halloween",
          partyPhoto: "https://img.freepik.com/premium-vector/flat-brazilian-carnival-illustration_23-2149223844.jpg?w=740",
          date: generateRandomDate(),
          titulo: "Noite Assustadora",
          organizer: "Organizador B",
        },
        {
          partyName: "Festa de Aniversário",
          partyPhoto: "https://img.freepik.com/free-psd/abstract-music-poster-template-with-colorful-wavy-shapes_1361-4187.jpg?w=360&t=st=1694994853~exp=1694995453~hmac=03ddc742ee667c29a3c247fadad07e0cae23080ab3431de3eb3c5d28d71bcb46",
          date: generateRandomDate(),
          titulo: "Aniversário Surpresa",
          organizer: "Organizador C",
        },
      ];

      const handleSearch = (searchTerm) => {
        const filteredPartys = mockupPartys.filter((party) =>
          party.partyName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredPartys);
      };
    
      // Renderize a lista de festas com base nos resultados da pesquisa
      const partyList = searchResults.length ? searchResults : mockupPartys;
    

    return(
        <>
         <SectionMyParty>
           <Navbar />
             <MainContainer>
                <ContainerInfo>
                  <TitleInfo>MYPARTY</TitleInfo>
                  <TextInfo>{defaultTexts}</TextInfo>
                  <ButtonSection>
                    <Button padding={"1.2em 1.8em"} buttonText={'ANUNCIAR EVENTO!'} radius={"30px"} buttonColor={'#f5167ed9'} border={'none'} />
                    <Button padding={"1.2em 1.8em"} buttonText={'Mais Detalhes'} radius={"30px"} buttonColor={'transparent'} border={'#fff 1px solid'} />
                  </ButtonSection>
                </ContainerInfo>
                <SearchBox />
                {/* <SearchBar valueSearch={searchTerm} changeValueSearch={setSearchTerm} onSearch={() => handleSearch(searchTerm)} /> */}
                {/* <PartysContainer>
                  {partyList.map((card, index) => (
                    <Link href={`/home/partys`}>
                      <PartyCards
                        key={index}
                        partyPhoto={card.partyPhoto}
                        partyName={card.partyName}
                        date={card.date}
                        organizer={card.organizer}
                      />
                    </Link>
                    ))}
               </PartysContainer> */}
            </MainContainer>
          </SectionMyParty>
          <TitleArea>
          <CardsSectionTitle>Maiores Eventos!</CardsSectionTitle>
          </TitleArea>
          <SectionCards>
              {cardsData.map((card, index) => (
                <Link href={`/home/partys`}>
                <CardsEvents
                  key={index}
                  text={card.text}
                  imageUrl={card.imageUrl}
                />
                </Link>
            ))}
          </SectionCards>
          <SectionPartys>
            <SectionHeader>
              <CardsSectionTitle>Eventos</CardsSectionTitle>
              <SelectContainer>
                <StyledSelect name="fimDeSemana">
                  <option value="">Fim de Semana</option>
                  <option value="sabado">Sábado</option>
                  <option value="domingo">Domingo</option>
                </StyledSelect>

                <StyledSelect name="tipo">
                  <option value="">Tipo</option>
                  <option value="evento">Evento</option>
                  <option value="reuniao">Reunião</option>
                </StyledSelect>

                <StyledSelect name="categoria">
                  <option value="">Categoria</option>
                  <option value="esporte">Esporte</option>
                  <option value="cultura">Cultura</option>
                </StyledSelect>
            </SelectContainer>
            </SectionHeader>
           <PartysContainer>
                  {partyList.map((card, index) => (
                    <Link href={`/home/partys`}>
                      <PartyCards
                        key={index}
                        partyPhoto={card.partyPhoto}
                        partyName={card.partyName}
                        date={card.date}
                        organizer={card.organizer}
                      />
                    </Link>
                    ))}
            </PartysContainer>
            <ButtonMoreContent>
               <Button padding={"1.2em 2em"} buttonText={'Ver Todos'} radius={"30px"} buttonColor={'transparent'} border={'2px solid #3d37f1'} color={'#3d37f1'} />
            </ButtonMoreContent>
          </SectionPartys>
          <SectionEventsRequest>
            <TitleRequest>Solicite seu evento!</TitleRequest>
            <InfoRequest>Lorem impsum dolor sit amet, consectetur adipiscing elit</InfoRequest>
            <Button padding={"1.2em 8em"} buttonText={'Solicitar'} radius={"30px"} buttonColor={'#f5167ed9'} border={'none'} />
          </SectionEventsRequest>
          <TitleArea>
            <CardsSectionTitle>Avalie</CardsSectionTitle>
          </TitleArea>
          <SectionRateUs>
            <SectionCards>
                {cardsRateUs.map((card, index) => (
                  <CardRateUs
                    key={index}
                    title={card.title}
                    location={card.location}
                    description={card.description}
                    imageUrl={card.imageUrl}
                  />
              ))}
            </SectionCards>
          </SectionRateUs>
        </>
    )
}