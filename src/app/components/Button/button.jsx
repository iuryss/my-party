'use client'

import React from "react";
import Image from "next/image";
import { ButtonContainer, LoginScreenButton } from "./styles";

const Button = (props) => {
  const handleClick = () => {
    console.log('Botão clicado!', props);
  };

    return(
        <ButtonContainer>
          <LoginScreenButton onClick={props.onClick} padding={props.padding} radius={props.radius}>
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

export default Button;