import React from 'react';
import Footer from './components/Footer';
import HeaderBar from './components/Header';
import { ThemeProvider } from 'styled-components';



function App() {

  const [ color, setColor] = React.useState('');

  return (
    <div className="App">
      <HeaderBar/>
      <main>
        <span>Please enter your favourite color</span>
        <input type="text" value={color} onChange={e => setColor(e.target.value)} />

        <p>
          Your favourite color is {color}
        </p>
      </main>
    </div>
  );
}

export default App;
