import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [image, setImage] = useState('fire');

  const changeLine1 = function (event) {
    setLine1(event.target.value);
  };

  const changeLine2 = function (event) {
    setLine2(event.target.value);
  };

  const changeImage = function (event) {
    console.log(event.target.value);
    setImage(event.target.value);
  };

  const onClickExport = function (event) {
    html2canvas(document.querySelector('#meme')).then((canvas) => {
      var img = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  };

  return (
    <div className='App'>
      <h2>Meme generator</h2>
      <Select
        onChange={changeImage}
        label='Age'
        variant='standard'
        sx={{ m: 1, width: '25ch' }}
        value={image}
      >
        <MenuItem value='fire'>Burning House</MenuItem>
        <MenuItem value='futurama'>Futurama</MenuItem>
        <MenuItem value='history'>History Channel</MenuItem>
        <MenuItem value='matrix'>Matrix</MenuItem>
        <MenuItem value='philosoraptor'>Philosoraptor</MenuItem>
        <MenuItem value='smart'>Smart Guy</MenuItem>
      </Select>

      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          type='text'
          placeholder='Line 1'
          onChange={changeLine1}
          label='Line 1'
          variant='standard'
        />
      </Box>
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          type='text'
          placeholder='Line 2'
          onChange={changeLine2}
          label='Line 2'
          variant='standard'
        />
      </Box>
      <Button variant='contained' onClick={onClickExport}>
        Export
      </Button>

      <div className='meme' id='meme'>
        <span>{line1.toUpperCase()}</span> <br />
        <span>{line2.toUpperCase()}</span> <br />
        <img src={'/img/' + image + '.jpg'} alt='' />
      </div>
    </div>
  );
}

export default App;
