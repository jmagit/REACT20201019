import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = '<b>mundo</b>';
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola <span dangerouslySetInnerHTML={{__html: nombre}} />
        </a><br />
        Suma = 2 + 2 = {2 + 2}<br/>
        <ul>
          {numbers.map((item, index) => <li key={index}>{item}</li>)}
          {listItems}
        </ul>
      </header>
    </div>
  );
}

export default App;
