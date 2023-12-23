import styled from "styled-components"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    max-width: 50%;
    margin-inline: 2em;
    margin-bottom: 1em;
    padding-top: 2em;
    border-radius: 10px;
    background-color: #1b1b1b;
`
export const CardImage = styled.img`
    width: 20em;
    align-self: center;
    height: 10em;
    border-radius: 10px;
`

export const CardContent = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5%; /* Use uma unidade relativa (por exemplo, %) para o padding */
    text-align: center;
}
`
export const CardRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: red;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5%; /* Use uma unidade relativa (por exemplo, %) para o padding */
}
`

export const Text = styled.p`
    margin: 10px 0;
    font-size: 1em;
}
`
export const TitleText = styled.h3`
    margin: 10px 0;
    font-weight: 700;
    font-size: 1.2em;
}
` 
export const DescriptionText = styled.p`
    margin: 10px 0;
    font-size: 1.2em;
    text-align: left;
}
` 