import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import {CustomDateInput, Input, InputsContainer, SearchBoxColumn, SearchBoxContainer, TitleContainer} from './styles.js';
import 'react-datepicker/dist/react-datepicker.css';

function SearchBox() {
    const [searchText, setSearchText] = useState('');
    const [stateText, setStateText] = useState('');
    const [stateResults, setStateResults] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
  
    useEffect(() => {
        if (stateText) {
          axios
            .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?q=${stateText}`)
            .then((response) => {
              console.log('useEffect | Estados', response.data);
              setStates(response.data);
            })
            .catch((error) => {
              console.error('Erro ao buscar estados:', error);
            });
        } else {
          setStates([]);
        }
      }, []);

    const filterStates = (text) => {
        const filteredStates = states.filter((state) =>
          state.toLowerCase().includes(text.toLowerCase())
        );
        setStateResults(filteredStates);
    };
  
    return (
      <SearchBoxContainer>
        <SearchBoxColumn>
            <label>Procurar Evento</label>
            <Input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          /> 
        </SearchBoxColumn>
        <SearchBoxColumn>
            <label>Estado</label>
            <Input
            type="text"
            value={stateText}
            onChange={(e) => setStateText(e.target.value)}
          />    
        </SearchBoxColumn>
        <SearchBoxColumn>
            <label>Quando</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              customInput={<CustomDateInput />}
          />
        </SearchBoxColumn>
        
  
      </SearchBoxContainer>
    );
  }
  
  export default SearchBox;