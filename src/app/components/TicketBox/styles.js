import styled from "styled-components"

export const SearchBoxContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 63%;
  width: 50vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #242565;
  border-radius: 20px;
  padding: 2em;
  height: 7.8em;
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
export const Input = styled.select`
  background-color: red;
  color: #fff;
  border:none important!;
  border-bottom: 1px solid #1890ff important!;
  padding: 5px 10px;
  outline: none;
  font-weight: 500;
  margin-top: 2em;
  font-size: 14px;
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