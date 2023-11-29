import styled from "styled-components";
import { VuesaxOutlineLocation1 } from "../../../../../../assets/icons/VuesaxOutlineLocation1";
import { VuesaxOutlineTicket1 } from "../../../../../../assets/icons/VuesaxOutlineTicket1/VuesaxOutlineTicket1";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 0vh;
}
`
export const PartysContainer = styled.div`
    display: flex;
    margin-top: 5em;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
}
`
export const SectionMyParty = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(119deg, rgba(237, 70, 144, 0.60) -2.11%, rgba(85, 34, 204, 0.60) 63.58%);
    height: 70vh;
}
`
export const ImageBackground = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(https://img.freepik.com/fotos-gratis/a-luz-brilhante-do-palco-ilumina-os-fas-de-rock-gerados-pela-ia_188544-37983.jpg?w=1060&t=st=1694986456~exp=1694987056~hmac=ba92bf0b39761649b8241ac88aba6fb4599dce7a3a3917ea3e91826b4ef1cca3);
    background-size: contain;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    align-self: center;
}
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background-color: red;
    align-items: center;
    min-height: 30em;
}
`
export const TitleInfo = styled.h1`
    color: #fff;
}
`
export const TextInfo = styled.span`
    color: #fff;
    text-align: center;
    font-weight: 150;
    margin-inline: 40em;
    margin-top: 2em;
}
`
export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 2em;
}
`
export const SectionCards = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    min-height: 30em;
    align-items: center;
}
`
export const SectionPartys = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    justify-content: space-between;
    align-items: flex-start;
    padding-inline: 5em;
    margin-left: 6em;
    margin-right: 6em;
}
`
export const CardsSectionTitle = styled.h1`
    margin-bottom: 0.5em;
    color: #C857A6;
    text-align: center;
    font-family: 'Jolly Lodger', cursive;
    font-weight: 400;
    font-size: 58px;
}
`
export const PartysDescription = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Jolly+Lodger&family=Rubik:wght@300&display=swap');
    display: flex;
    margin-top: 3em;
    flex-direction: column;
    color: #000000;
    text-align: center;
    font-family: 'Rubik', cursive; 
    font-weight: 400;
    font-size: 24px;
    width: 45em;
}
`
export const TitleArea = styled.div`
    display: flex;
    align-items: center;
    padding-top: 4.8em;
    justify-content: center;
}
`
export const MapArea = styled.div`
    display: flex;
    margin-inline: 10em;
    margin-bottom: 10em;
}
`

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
`;

export const CardsContainer = styled.div`
    display: flex;
    width: 100%;
    padding-inline: 15em; 
    flex-direction: row; 
    align-items: center;
}
`
export const StyledSelect = styled.select`
  padding: 8px;
  background-color: #f2f4ff;
  color: #1d275f;
  font-weight: 500;
  margin: 5px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export const SectionHeader = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Jolly+Lodger&display=swap');
  display: flex;
  margin-top: 8em;
  width: 100%;
  flex-direction: column;
  // background-color: blue;
  justify-content: space-around;
  align-items: center;
  margin-right: 6em;

  & h1 {
    font-family: Jolly Lodger, cursive;
  }
`;

export const ButtonMoreContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-right: 6em;
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  width: 100%;
`;

export const SectionEventsRequest = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #eee1ff;
  min-height: 10em;
  margin-top: 2em;
`;

export const TitleRequest = styled.h2`
  font-weight: 800;
  font-size: 2em;
  text-align: center;
  color: #000;
`;
export const InfoRequest = styled.span`
  font-weight: 400;
  text-align: left;
  color: #000;
  inline-size: 20em;
  overflow-wrap: break-word;
`;

export const SectionRateUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee1ff;
  min-height: 10em;
`;

export const StyledTicket = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;
  margin-top: 2.2em;
`;

export const CheckItemsContainer = styled.div`
  display: flex;
  margin-top: 2em;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Frame = styled.div`
  align-items: center;
  border-bottom: 2px solid #000000;
  border-left: 2px solid #000000;
  border-radius: 16px;
  border-top: 2px solid #000000;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 18px 24px;
  position: relative;
`;

export const VuesaxOutline = styled(VuesaxOutlineTicket1)`
  height: 48px !important;
  position: relative !important;
  width: 48px !important;
`;

export const TicketContainer = styled.div`
  align-items: center;
  border-bottom: 2px solid #000000;
  border-radius: 16px;
  border-right: 2px solid #000000;
  border-top: 2px solid #000000;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 12px 24px;
  position: relative;
`;

export const TerAFeira = styled.p`
  color: #000000;
  font-family: "Rubik", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -2px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;

export const Frame2 = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  justify-content: center;
  position: relative;
`;

export const VuesaxOutlineLocation = styled(VuesaxOutlineLocation1)`
  height: 32px !important;
  position: relative !important;
  width: 32px !important;
`;

export const RuaLoremipsum = styled.div`
  color: #000000;
  font-family: "Rubik", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

export const SectionTicket = styled.div`
  display: flex;
  margin-top: 4em;
  flex-direction: column;
`;

export const CardPuchaseTItle = styled.div`
  color: #c857a6;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  font: 400 58px/81px 'Jolly Lodger', cursive;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 62px;
  }
`;

export const ContainerCardsTicket = styled.div`
  justify-content: center;
  align-content: center;
  align-self: center;
  flex-wrap: wrap;
  margin-top: 48px;
  width: 100%;
  max-width: 1062px;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const Div = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    var(--Gray, #333);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 25px 44px 25px 45px;
  @media (max-width: 991px) {
    margin-top: 16px;
    padding: 0 20px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SpaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TicketTipe = styled.div`
  color: var(--White, #f9f9f9);
  text-align: center;
  text-transform: capitalize;
  align-self: center;
  white-space: nowrap;
  font: 400 32px/50px "Joti One", display;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const PriceTicket = styled.div`
  color: var(--White, #f9f9f9);
  text-align: center;
  text-transform: uppercase;
  align-self: center;
  margin-top: 16px;
  white-space: nowrap;
  font: 700 40px/49px Montserrat, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const OfferDescription = styled.div`
  color: var(--White, #f9f9f9);
  text-align: center;
  text-transform: capitalize;
  align-self: center;
  margin-top: 45px;
  white-space: nowrap;
  font: 400 24px/28px Rubik, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

export const OfferDescription2 = styled.div`
  color: var(--White, #f9f9f9);
  text-align: center;
  text-transform: capitalize;
  align-self: stretch;
  margin-top: 40px;
  white-space: nowrap;
  font: 400 24px/28px Rubik, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Div2 = styled.div`
  color: var(--White, #f9f9f9);
  text-align: center;
  text-transform: capitalize;
  align-self: stretch;
  margin-top: 40px;
  white-space: nowrap;
  font: 400 24px/28px Rubik, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Button1 = styled.button`
  align-items: center;
  border-radius: 16px;
  background-color: #64217c;
  align-self: center;
  margin-top: 36px;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  border-width: 1px;
  padding: 16px 20px;
  font: 500 16px/22px Rubik, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
  cursor: pointer;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Card2 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #64217c;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 25px 28px 25px 29px;
  @media (max-width: 991px) {
    margin-top: 16px;
    padding: 0 20px;
  }
`;

export const OfferDescription4 = styled.div`
  color: var(--White, #f9f9f9);
  text-align: center;
  text-transform: capitalize;
  align-self: stretch;
  margin-top: 40px;
  white-space: nowrap;
  font: 400 24px/28px Rubik, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Div3 = styled.div`
  color: #fff;
  text-align: center;
  text-transform: capitalize;
  align-self: stretch;
  margin-top: 40px;
  white-space: nowrap;
  font: 400 24px/28px Rubik, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Button2 = styled.button`
  align-items: center;
  border-radius: 16px;
  background-color: #292929;
  align-self: center;
  margin-top: 36px;
  width: 235px;
  max-width: 100%;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  border-width: 1px;
  padding: 16px 20px;
  font: 500 16px/22px Rubik, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Card3 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    var(--Gray, #333);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 26px 44px;
  @media (max-width: 991px) {
    margin-top: 16px;
    padding: 0 20px;
  }
`;

export const OfferDescription5 = styled.div`
  color: var(--White, #f9f9f9);
  text-align: center;
  text-transform: capitalize;
  align-self: center;
  margin-top: 45px;
  white-space: nowrap;
  padding-bottom: 1px;
  font: 400 24px/28px Rubik, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

export const OfferDescription6 = styled.div`
  color: var(--White, #f9f9f9);
  text-align: center;
  text-transform: capitalize;
  align-self: stretch;
  margin-top: 40px;
  white-space: nowrap;
  font: 400 24px/28px Rubik, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const Div4 = styled.div`
  color: var(--White, #f9f9f9);
  text-align: center;
  text-transform: capitalize;
  align-self: stretch;
  margin-top: 40px;
  white-space: nowrap;
  font: 400 24px/28px Rubik, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;
