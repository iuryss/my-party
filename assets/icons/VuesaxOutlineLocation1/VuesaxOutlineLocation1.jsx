import React from "react";
import styled from "styled-components";

const StyledVuesaxOutlineLocation1 = styled.svg`
  &.vuesax-outline-location-1 {
    fill: none;
    height: 32px;
    width: 33px;
  }

  & .path {
    fill: black;
  }
`;

export const VuesaxOutlineLocation1 = ({ className }) => {
  return (
    <StyledVuesaxOutlineLocation1
      className={`vuesax-outline-location-1 ${className}`}
      viewBox="0 0 33 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.5001 18.8933C13.6601 18.8933 11.3401 16.5867 11.3401 13.7333C11.3401 10.88 13.6601 8.58667 16.5001 8.58667C19.3401 8.58667 21.6601 10.8933 21.6601 13.7467C21.6601 16.6 19.3401 18.8933 16.5001 18.8933ZM16.5001 10.5867C14.7668 10.5867 13.3401 12 13.3401 13.7467C13.3401 15.4933 14.7534 16.9067 16.5001 16.9067C18.2468 16.9067 19.6601 15.4933 19.6601 13.7467C19.6601 12 18.2334 10.5867 16.5001 10.5867Z"
      />
      <path
        className="path"
        d="M16.5 30.3467C14.5267 30.3467 12.54 29.6 10.9933 28.12C7.05999 24.3334 2.71332 18.2934 4.35332 11.1067C5.83332 4.58669 11.5267 1.66669 16.5 1.66669C16.5 1.66669 16.5 1.66669 16.5133 1.66669C21.4867 1.66669 27.18 4.58669 28.66 11.12C30.2867 18.3067 25.94 24.3334 22.0067 28.12C20.46 29.6 18.4733 30.3467 16.5 30.3467ZM16.5 3.66669C12.62 3.66669 7.63332 5.73335 6.31332 11.5467C4.87332 17.8267 8.81999 23.24 12.3933 26.6667C14.7 28.8934 18.3133 28.8934 20.62 26.6667C24.18 23.24 28.1267 17.8267 26.7133 11.5467C25.38 5.73335 20.38 3.66669 16.5 3.66669Z"
      />
    </StyledVuesaxOutlineLocation1>
  );
};