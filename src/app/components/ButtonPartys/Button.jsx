import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { VuesaxOutlineArrowLeft4 } from "../../icons/VuesaxOutlineArrowLeft4";
import { VuesaxOutlineArrowRight3 } from "../../icons/VuesaxOutlineArrowRight3";

const StyledButton = styled.button`
  all: unset;
  align-items: flex-start;
  border-radius: 16px;
  box-sizing: border-box;
  display: inline-flex;
  gap: 8px;
  padding: 16px 24px;
  position: relative;

  &.outline {
    border: 1px solid;
    border-color: var(--collection-1-main);
  }

  &.colored {
    background-color: var(--collection-1-main);
  }

  .vuesax-outline-arrow {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }

  .text-wrapper {
    font-family: "Roboto", Helvetica;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 22.4px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;

    &.outline {
      color: var(--collection-1-main);
    }

    &.colored {
      color: #292d32;
    }
  }
`;

export const Button = ({ leftIcon = true, rightIcon = true, text = "Button", type, className, divClassName }) => {
  return (
    <StyledButton className={`button ${type} ${className}`}>
      {leftIcon && (
        <VuesaxOutlineArrowLeft4 className="vuesax-outline-arrow" color={type === "outline" ? "#FE772D" : "#292D32"} />
      )}

      <div className={`text-wrapper ${divClassName}`}>{text}</div>
      {rightIcon && (
        <VuesaxOutlineArrowRight3 className="vuesax-outline-arrow" color={type === "outline" ? "#FE772D" : "#292D32"} />
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.oneOf(["colored", "outline"]),
};