import styled from "styled-components"

export const CardParty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
}
`
export const Card = styled.div`
    position: relative;
    // background-color: blue;
    width: 20rem;
    height: 18rem;
    padding-inline: 0.8em;

}
`
export const CardImage = styled.img`
    width: 100%;
    height: 9em;
    object-fit: cover;
    -webkit-user-drag: none;
    border-radius: 10px;
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
    box-shadow: 11px 8px 17px -9px rgba(0,0,0,0.55);
-webkit-box-shadow: 11px 8px 17px -9px rgba(0,0,0,0.55);
-moz-box-shadow: 11px 8px 17px -9px rgba(0,0,0,0.55);
}
`
export const ContentDate = styled.span`
    font-size: 1em;
    color: #000000;
    font-weight: bold;
}
`
export const PartyName = styled.span`
    font-size: 1em;
    color: #000000;
    font-weight: bold;
}
`
export const Organizer = styled.span`
    margin-top: 2em;
    color: #000000;
    font-size: 0.8em;
    font-weight: 400;
}
`