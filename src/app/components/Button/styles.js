import styled from "styled-components"

export const ButtonContainer = styled.div`
    margin-top: 0.5em;
    display: flex;
    align-items: center;
`

export const LoginScreenButton = styled.button`
    background-color: #4e0f72d9;
    color: white;
    border: #fff 1px solid;
    border-radius: ${(props) => props.radius};
    cursor: pointer;
    padding: ${(props) => props.padding};
`