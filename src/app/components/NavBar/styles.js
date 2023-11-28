import styled from "styled-components"

export const NavBar = styled.nav`
  display: flex;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  align-items: center; 
  justify-content: space-evenly;
  padding: 1em;
  padding-left: 3em;
  background-color: transparent;
  color: #fff;
  font-weight: 400;
}
`
export const ContainerMenu = styled.div`
  display: flex;
  padding-left: 0.5em;
  flex: 0.6;
  //background-color: blue; 
  justify-content: flex-end;
  align-items: baseline;
}
`
export const MenuList = styled.ul`
  display: flex;
  align-self: flex-end;
  //background-color: red; 
  list-style-type: none;
}
`
export const ItemsList = styled.li`
  padding: 15px;
  font-size: 14px;
}
`