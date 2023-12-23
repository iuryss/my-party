import styled from "styled-components"

export const CardParty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    margin: 1em;
}
`
export const Card = styled.div`
    position: relative;
    // background-color: blue;
    width: 25rem;
    height: 20rem;
    padding-inline: 0.8em;
}
`
export const CardImage = styled.img`
    width: 100%;
    height: 10em;
    object-fit: cover;
    -webkit-user-drag: none;
    border-radius: 10px 10px 0px 0px;
}
`
export const CardContent = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-around;
    padding: 0.2em; 
    text-align: center;
    border-radius: 0% 0% 5% 5%;
    box-shadow: 11px 8px 17px -9px rgba(0,0,0,0.55);
-webkit-box-shadow: 11px 8px 17px -9px rgba(0,0,0,0.55);
-moz-box-shadow: 11px 8px 17px -9px rgba(0,0,0,0.55);
}
`
export const CardRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    // background-color: red;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5%; /* Use uma unidade relativa (por exemplo, %) para o padding */
}
`
export const CardContainerDate = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    // background-color: blue;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5%; /* Use uma unidade relativa (por exemplo, %) para o padding */
    text-align: center;
}
`
export const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    // background-color: green;
    justify-content: space-between;
    align-items: center;
    padding: 5%;
    margin-right: 1em;
    text-align: center;
}
`

export const ContentDate = styled.span`
    font-size: 1.2em;
    color: #000000;
    font-weight: bold;
    text-align: center;
}
`
export const TitleDate = styled.span`
    font-size: 0.8em;
    color: #3D37F1;
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