import React from "react";
import styled from "styled-components";

const StyledVuesaxOutlineLocation = styled.svg`
  &.vuesax-outline-location {
    .path {
      fill: #292D32;
    }
    .g {
      opacity: 0;
    }
  }
`;

export const VuesaxOutlineLocation = ({ className }) => {
  return (
    <StyledVuesaxOutlineLocation
      className={`vuesax-outline-location ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 14.17C9.87 14.17 8.13 12.44 8.13 10.3C8.13 8.16 9.87 6.44 12 6.44C14.13 6.44 15.87 8.17 15.87 10.31C15.87 12.45 14.13 14.17 12 14.17ZM12 7.94C10.7 7.94 9.63 9 9.63 10.31C9.63 11.62 10.69 12.68 12 12.68C13.31 12.68 14.37 11.62 14.37 10.31C14.37 9 13.3 7.94 12 7.94Z"
      />
      <path
        className="path"
        d="M12 22.76C10.52 22.76 9.03 22.2 7.87 21.09C4.92 18.25 1.66 13.72 2.89 8.33C4 3.44 8.27 1.25 12 1.25C12 1.25 12 1.25 12.01 1.25C15.74 1.25 20.01 3.44 21.12 8.34C22.34 13.73 19.08 18.25 16.13 21.09C14.97 22.2 13.48 22.76 12 22.76ZM12 2.75C9.09 2.75 5.35 4.3 4.36 8.66C3.28 13.37 6.24 17.43 8.92 20C10.65 21.67 13.36 21.67 15.09 20C17.76 17.43 20.72 13.37 19.66 8.66C18.66 4.3 14.91 2.75 12 2.75Z"
      />
      <g className="g" />
    </StyledVuesaxOutlineLocation>
  );
};