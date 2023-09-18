import styled from "styled-components"

export const CardSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 55vh;
}
`
export const Card = styled.div`
    position: relative;
    width: 80rem;
    height: 190rem;
    overflow: hidden;
    border: 1px solid #636363;
}
`
export const CardImage = styled.img`
    width: 100%;
    height: 25em;
    object-fit: cover;
    -webkit-user-drag: none;
}
`
export const PrevButton = styled.button`
    position: absolute;
    top: 60%;
    left: 10px;
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