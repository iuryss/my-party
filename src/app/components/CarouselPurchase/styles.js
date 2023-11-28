import styled from "styled-components"

export const CardSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // height: 58vh;
}
`
export const Card = styled.div`
    display: flex;
    // width: 80rem;
    // background-color: blue;
    padding-inline: 0.2em;
}
`
export const CardImage = styled.img`
    width: 100%;
    height: 30em;
    object-fit: contain;
    -webkit-user-drag: none;
}
`
export const CardTextArea = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    height: 98%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%; /* Use uma unidade relativa (por exemplo, %) para o padding */
    text-align: center;
    // z-index: -1;
}
`
export const CardText = styled.span`
    font-size: 1.5em;
}
`
export const PurchaseButton = styled.button`
    background-color: #4e0f72d9;
    // z-index: 2;
    color: white;
    border: none;
    border-radius: 2em;
    padding: 1em 4em; 
    cursor: pointer;
    &:hover {
        background-color: #8520BF;
      }
}
`

export const PrevButton = styled.button`
    position: absolute;
    top: 60%;
    left: 1em;
    background-color: transparent;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    z-index: 1;
}
`
export const NextButton = styled.button`
    position: absolute;
    top: 60%;
    right: 10px;
    background-color: transparent;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    z-index: 1;
}
`
export const Dots = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}
`
export const Dot = styled.span`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #bbb;
    margin: 0 5px;
    cursor: pointer;
}
`
export const DotSelected = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #ffffff;
    margin: 0 5px;
    cursor: pointer;
}
`