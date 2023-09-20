import React from 'react'
import {createTheme,ThemeProvider} from '@mui/material' 
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './style.css'

const FilterComponent = ({val,setVal,itemList,label,flag}) => {
 

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const theme=createTheme({
    palette: {
        primary :{
            main:"#3a80e9"
        }
    }
    });

  const style={
    alignSelf:"right",
    minWidth:"150px",
    margin:"1rem",
    height:"50px",
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
    },
    '& .MuiSvgIcon-root': {
        color: 'white'
    },
    '& .MuiSelect-select': {
        textAlign:'center',
        color: 'white'
    },
    '& .MuiFormLabel-root': {
        color: 'white'
    },
    '& .MuiFormHelperText-root': {
        color: 'white'
    },
    "&:hover": {
        "&& fieldset": {
          border: "1px solid white"
        }
      }
  }
  

  return (
    <ThemeProvider theme={theme} >
      <FormControl sx={style} size="small">
        <InputLabel id="demo-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select"
          value={val}
          label={label}
          onChange={handleChange}
        > 
           { itemList.map((item,index)=>(
               <MenuItem key={index} value={flag===true ? item.slice(0,3) : item}>{item}</MenuItem>
            ))
           }
        </Select>
        <FormHelperText>Select {label}</FormHelperText>
      </FormControl>
    </ThemeProvider>
  );
}

export default FilterComponent