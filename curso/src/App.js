import React from 'react';
import './App.css';
import logo from './logo.png';
import { Home } from './Home';
import { Contador } from './contador'

function Header(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {props.menu.map((item, index) => <input key={index} type="button" className="btn btn-link" value={item.texto} onClick={ev => props.onSeleccionar(index)} />)}
    </header>
  );
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.menu = [
      //{ texto: 'Muro', componente: <Home /> },
      { texto: 'Home', componente: <Home /> },
      { texto: 'Contador', componente: <Contador init={10} /> },
    ];
    this.state = { componente: this.menu[0].componente };
    this.seleccionar = indice => {
      this.setState({ componente: this.menu[indice].componente })
    };
  }
  render() {
    return (
      <div>
        <Header menu={this.menu} onSeleccionar={this.seleccionar} />
        <main className="container-fluid">
          {this.state.componente}
        </main>
      </div>
    );
  }
}

export default App;
