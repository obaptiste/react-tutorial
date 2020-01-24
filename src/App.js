

import React, { useEffect, useRef } from 'react';
import { css, jsx } from '@emotion/core';

import Footer from './components/Footer';
import HeaderBar from './components/Header';


function App() {

  let colorPick = '';
  const [ color, setColor] = React.useState('');
  const [ colorIndex, setColorIndex ] = React.useState(1);
  const colorInput = useRef(null);
  const colors = ["blue", "green", "yellow", "red"];


  useEffect(() => {
    document.body.style.backgroundColor = colors[colorIndex];
  }, [colorIndex]);


  function handleColorChange() {
    const next = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
    setColorIndex(next);
  }

  return (
    <div className="App">
      <HeaderBar color={colors[colorIndex + 1]}/>
      <main>
        <button onClick={handleColorChange}>Change background</button>
      </main>
    </div>
  );
}

export default App;
