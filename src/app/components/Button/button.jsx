'use client'

import React from "react";
import Image from "next/image";
import styles from "../../styles/button.module.css"
import { ButtonContainer } from "./styles";

const Button = (props, {buttonClass}) => {
  const handleClick = () => {
    console.log('Botão clicado!', props);
  };

    return(
        <ButtonContainer>
          <button className={buttonClass} onClick={handleClick}>
            {props.buttonIcon ? 
              <Image width={30} style={{marginRight: 10}} src={props.buttonIcon} /> 
            : 
              null
            }
              {props.buttonText}
            </button>
        </ButtonContainer>
    )
}

export default Button;