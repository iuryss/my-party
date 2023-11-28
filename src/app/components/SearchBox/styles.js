import styled from "styled-components"

export const SearchBoxContainer = styled.div`
  position: absolute;
  left:29%;
  top:31em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: #242565;
  border-radius: 20px;
  height: 7.8em;
  width: 51em;
  color: white;
}
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
}
`
export const SearchBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 2em;
  color: white;
}
`
export const Input = styled.input.attrs({ type: 'text' })`
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  width: 100%;
  border: none;
  border-bottom: 1px solid #DEDEDE;
  outline: none;
  transition: 0.15s;
  text-align: center;
  padding-inline: 2em;
  &:active {
    background-color: #fff;
  }
`
export const CustomDateInput = styled.input`
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  width: 100%;
  border: none;
  border-bottom: 1px solid #DEDEDE;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #fff;
  }
}
`