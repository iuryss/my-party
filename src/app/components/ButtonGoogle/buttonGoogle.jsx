'use client'

import React from "react";
import Image from "next/image";
import { ButtonContainer, LoginScreenButton } from "./styles";

const ButtonGoogle = (props) => {
  const handleClick = () => {
    console.log('Botão clicado!', props);
  };

    return(
        <ButtonContainer>
          <LoginScreenButton onClick={handleClick}>
            {props.buttonIcon ? 
              <Image width={30} style={{marginRight: 10}} src={props.buttonIcon} /> 
            : 
              null
            }
              {props.buttonText}
            </LoginScreenButton>
        </ButtonContainer>
    )
}

export default ButtonGoogle;