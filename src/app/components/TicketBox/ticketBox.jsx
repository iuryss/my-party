import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import {CustomDateInput, Input, InputsContainer, SearchBoxColumn, SearchBoxContainer, TitleContainer} from './styles.js';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import 'react-datepicker/dist/react-datepicker.css';

function TicketBox() {
    const [age, setAge] = React.useState('');
    const [searchText, setSearchText] = useState('');
    const [stateText, setStateText] = useState('');
    const [stateResults, setStateResults] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = (e) => {
      setAge(e.target.value);
    };
  
    // useEffect(() => {
    //     if (stateText) {
    //       axios
    //         .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?q=${stateText}`)
    //         .then((response) => {
    //           console.log('useEffect | Estados', response.data);
    //           setStates(response.data);
    //         })
    //         .catch((error) => {
    //           console.error('Erro ao buscar estados:', error);
    //         });
    //     } else {
    //       setStates([]);
    //     }
    //   }, []);

    const filterStates = (text) => {
        const filteredStates = states.filter((state) =>
          state.toLowerCase().includes(text.toLowerCase())
        );
        setStateResults(filteredStates);
    };
  
    return (
      <SearchBoxContainer>
        <SearchBoxColumn>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label" style={{color: "#fff"}}>Ingresso</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              style={{color: "#fff",}}
              value={age}
              onChange={handleChange}
              label="Ingresso"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10} >OpenBar</MenuItem>
              <MenuItem value={20}>Meia Entrada - Front</MenuItem>
              <MenuItem value={30}>Front - Inteira</MenuItem>
            </Select>
        </FormControl>
        </SearchBoxColumn>
  
      </SearchBoxContainer>
    );
  }
  
  export default TicketBox;