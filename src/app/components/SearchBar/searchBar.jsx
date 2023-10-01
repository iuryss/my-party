import React, { useState } from 'react';
import Button from '../Button/button';
import {ContainerSearch, InputSearch} from './styles';

function SearchBar({ valueSearch, onSearch, changeValueSearch }) {
  
  return (
    <ContainerSearch>
      <InputSearch
        type="text"
        placeholder="Pesquisar..."
        value={valueSearch}
        onChange={(e) => changeValueSearch(e.target.value)}
      />
      <Button padding={"0.2em 3em"} buttonText={'Pesquisar'} radius={"0px"} onClick={onSearch}>Pesquisar</Button>
    </ContainerSearch>
  );
}

export default SearchBar;