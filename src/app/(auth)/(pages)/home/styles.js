import styled from "styled-components"

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 0vh;
}
`
export const PartysContainer = styled.div`
    display: flex;
    margin-top: 5em;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
`
export const ContainerSearchBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
    min-height: 0vh;
}
`

export const SectionMyParty = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to right, #d45aa1, #c54daa, #b045b4, #9341c0, #6a41cb);
}
`
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background-color: red;
    align-items: center;
    min-height: 30em;
}
`
export const TitleInfo = styled.h1`
    color: #fff;
}
`
export const TextInfo = styled.span`
    color: #fff;
    text-align: center;
    font-weight: 200;
    margin-inline: 25em;
}
`
export const ButtonSection = styled.div`
    display: flex;
    width: 30%;
    flex-direction: row;
    align-items: center;
    // background-color: blue;
    justify-content: space-evenly;
    margin-top: 0.5em;
}
`
export const SectionCards = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    min-height: 40em;
    width: 100%;
    align-items: center;
    justify-content: center;
}
`
export const SectionPartys = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-inline: 5em;
    margin-left: 6em;
    margin-right: 6em;
}
`
export const CardsSectionTitle = styled.h1`
    margin-bottom: 0.5em;
    font-weight: 600;
    color: #2C2E83;
}
`
export const TitleArea = styled.div`
    display: flex;
    padding-top: 4.8em;
    align-items: center;
    justify-content: center;
}
`
export const CardsContainer = styled.div`
    display: flex;
    width: 100%;
    padding-inline: 15em; 
    flex-direction: row; 
    align-items: center;
}
`
export const StyledSelect = styled.select`
  padding: 8px;
  background-color: #f2f4ff;
  color: #1d275f;
  font-weight: 500;
  margin: 5px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export const SectionHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
//   background-color: blue;
  justify-content: space-between;
  align-items: space-between;
  margin-right: 6em;
`;

export const ButtonMoreContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-right: 6em;
`;

export const SectionEventsRequest = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #eee1ff;
  min-height: 10em;
  margin-top: 2em;
`;

export const TitleRequest = styled.h2`
  font-weight: 800;
  font-size: 2em;
  text-align: center;
  color: #000;
`;
export const InfoRequest = styled.span`
  font-weight: 400;
  text-align: left;
  color: #000;
  inline-size: 20em;
  overflow-wrap: break-word;
`;

export const SectionRateUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee1ff;
  min-height: 20em;
`;