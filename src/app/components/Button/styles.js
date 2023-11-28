import styled from "styled-components"

export const ButtonContainer = styled.div`
    margin-top: 0.5em;
    display: flex;
    align-items: center;
`

export const LoginScreenButton = styled.button`
    background-color: ${(props) => props.buttonColor};
    color: ${(props) => props.color ? props.color : '#fff'};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.radius};
    cursor: pointer;
    padding: ${(props) => props.padding};
    font-weight: 500;
`