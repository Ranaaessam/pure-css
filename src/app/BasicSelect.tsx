'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const dayColors: { [key: string]: string } = {
    'Sunday': '#FF6347', 
    'Monday': '#4682B4', 
    'Tuesday': '#3CB371', 
    'Wednesday': '#FFD700', 
    'Thursday': '#FFA500',
    'Friday': '#800080', 
    'Saturday': '#FF69B4'
  };

  const [day, setSelectedDay] = React.useState<string>();
  const [open,setOpen] = React.useState<Boolean>(false)

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedDay(event.target.value);
    setOpen(false)
  };


  return (
    <Box sx={{ padding: 1 ,minWidth: 200 , minHeight:120}} >
      <FormControl fullWidth sx={{ backgroundColor:dayColors[day??"transperent"]}} >
        <InputLabel id="demo-simple-select-label">Days</InputLabel>
        <Select
   labelId="select-label"
   id="demo-simple-select"
   value={day}
   label="Day"
   onChange={handleChange}
   onOpen={() => setOpen(true)}
   onClose={() => setOpen(false)}

        >
          {Object.keys(dayColors).map((day,index)=>(
          <MenuItem value={day}
          key={index}
          sx={{
            backgroundColor: day ? dayColors[day] : 'transparent',
          }}
          >{day}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
