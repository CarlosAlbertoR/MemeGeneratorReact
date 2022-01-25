import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';

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
      <select onChange={changeImage}>
        <option value='fire'>Burning House</option>
        <option value='futurama'>Futurama</option>
        <option value='history'>History Channel</option>
        <option value='matrix'>Matrix</option>
        <option value='philosoraptor'>Philosoraptor</option>
        <option value='smart'>Smart Guy</option>
      </select>
      <br />
      <input type='text' placeholder='Line 1' onChange={changeLine1} />
      <br />
      <input type='text' placeholder='Line 2' onChange={changeLine2} />
      <br />
      <button onClick={onClickExport}>Export</button>

      <div className='meme' id='meme'>
        <span>{line1}</span> <br />
        <span>{line2}</span> <br />
        <img src={'/img/' + image + '.jpg'} alt='' />
      </div>
    </div>
  );
}

export default App;
