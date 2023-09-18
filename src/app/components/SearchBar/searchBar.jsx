import React, { useState } from 'react';
import Button from '../Button/button';
import {ContainerSearch, InputSearch} from './styles';

function SearchBar({ data, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Conduz a pesquisa dentro do objeto com base no searchTerm
    const searchResults = data.filter((item) =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Chama a função onSearch com os resultados da pesquisa
    onSearch(searchResults);
  };

  return (
    <ContainerSearch>
      <InputSearch
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button padding={"0.2em 1.4em"} buttonText={'Pesquisar'} radius={"0px"} onClick={handleSearch}>Pesquisar</Button>
    </ContainerSearch>
  );
}

export default SearchBar;