import React from "react";
import {NavBar, ContainerMenu, MenuList, ItemsList} from './styles.js';
import SearchIcon from '@mui/icons-material/Search';
import Button from "../Button/button.jsx";

const Navbar = () => {
  return (
    <header>
    <NavBar>
      <h2>LOGO</h2>
      <ContainerMenu>
        <MenuList>
          <ItemsList>Inicio</ItemsList>
          <ItemsList>Eventos</ItemsList>
          <ItemsList>Avaliações</ItemsList>
          <ItemsList>Contato</ItemsList>
        </ MenuList>
        <Button padding={"0.6em 1.8em"} buttonText={'Entrar'} radius={"20px"} buttonColor={'transparent'} border={'1px solid #fff'} />
      </ContainerMenu>
    </NavBar>
    </header>
  );
};

export default Navbar;
