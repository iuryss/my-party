import styled from "styled-components"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    opacity: 0;
    transition: .5s ease-in;
}
`
export const Card = styled.div`
    position: relative;
    max-width: 100%; /* Para tornar o card responsivo */
    margin-inline: 0.5em;
    margin-bottom: 1em;
    border-radius: 10px;
    background-color: #64217c;
    &:hover ${CardImage} {
        opacity: 1;
      }
`

export const CardContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5%; /* Use uma unidade relativa (por exemplo, %) para o padding */
    text-align: center;
}
`
export const Text = styled.p`
    margin: 10px 0;
    font-size: 2.3em; /* Tamanho de fonte responsivo */
    font-family: "Arial Black", Gadget, sans-serif;
}
`
export const Button = styled.button`
    background-color: #f5167ed9;
    color: white;
    border: ${(props) => props.border ? '#fff 1px solid' : 'none'};
    border-radius: 30px;
    cursor: pointer;
    padding: 1.2em 2em;
    margin: 1em;
    margin-inline: 5em;
    font-weight: 500;
}
`
export const RightArrow = styled.div`
   display: flex;
   align-items: center;
`
export const ArrowBody = styled.div`
   height: 2px; 
   width: 20em;
   background-color: #fff; 
`
export const ArrowHead = styled.div`
   width: 0;
   height: 0;
   border-top: 10px solid transparent;
   border-bottom: 10px solid transparent;
   border-left: 15px solid #fff; 
`
export const BottomContent = styled.div`
   display: flex;
   flex-direction: column;
   flex: 1;
   justify-content: flex-end;
   padding: 1em;
`