import styled from "styled-components"

export const CardParty = styled.div`
    display: flex;
    // background-color: red;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    height: 58vh;
}
`
export const Card = styled.div`
    position: relative;
    // background-color: blue;
    width: 20rem;
    height: 15rem;
    padding-inline: 0.5em;
}
`
export const CardImage = styled.img`
    width: 100%;
    height: 9em;
    object-fit: cover;
    -webkit-user-drag: none;
}
`
export const CardContent = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.2em; 
    text-align: center;
}
`
export const ContentDate = styled.span`
    font-size: 1em;
    font-weight: bold;
}
`
export const PartyName = styled.span`
    font-size: 1em;
    font-weight: bold;
}
`
export const Organizer = styled.span`
    margin-top: 2em;
    font-size: 0.8em;
    font-weight: 400;
}
`