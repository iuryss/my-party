import React from "react";
import styled from "styled-components";

function UpdatedComponent(props) {
  return (
    <Container>
      <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95a3cef9-ab8c-44eb-9b78-6f93dbe629b5?apiKey=703230a9c6564206924200d66e906592&" />
      <Text>{props.text}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1px;
`;

const Image = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
`;

const Text = styled.span`
  color: #0000000;
  text-align: left;
  text-transform: capitalize;
  align-self: stretch;
  white-space: nowrap;
  margin-top: -2px;
  font: 400 24px/36px Rubik, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default UpdatedComponent;