import React from "react";
import styled from "styled-components";

function cardRateUs(props) {
  return (
    <Container>
      <Content>
        <Image loading="lazy" srcSet={props.imageUrl}/>
        <EventName>{props.title}</EventName>
        <Location>{props.location}</Location>
        <Description>
        {props.description}
        </Description>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  border-radius: var(--Curvatura, 24px);
  background-color: #1b1b1b;
  display: flex;
  max-width: 426px;
  flex-direction: column;
  margin: 1.9em;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 29px 31px;
`;

const Image = styled.img`
  aspect-ratio: 1.73;
  object-fit: contain;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const EventName = styled.div`
  color: #eee;
  margin-top: 24px;
  white-space: nowrap;
  font: 600 24px Manrope, sans-serif;
`;

const Location = styled.div`
  color: #eee;
  margin-top: 14px;
  white-space: nowrap;
  font: 400 20px Manrope, sans-serif;
`;

const Description = styled.div`
  color: #eee;
  margin-top: 20px;
  font: 400 20px Manrope, sans-serif;
`;

export default cardRateUs;