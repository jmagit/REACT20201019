import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

function Saluda(props) {
    return (
        <React.Fragment>
            <h1>Hola {props.name && props.name.toUpperCase()}</h1>
            {props.children}
        </React.Fragment>
    );
}
class Despide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>Adios {this.props.name}</h1>;
    }
}

class Contador extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.init}</h1>
                <h1>{this.props.delta}</h1>
            </div>
        );
    }
}
Contador.propTypes = {
    init: PropTypes.number.isRequired,
    delta: PropTypes.any,
    onCambia: PropTypes.func
};
Contador.defaultProps = {
    delta: 5
  };
  
export class Home extends React.Component {
    render() {
        let nombre = '<b>mundo</b>';
        //const numbers = [1, 2, 3, 4, 5];
        const listItems = [{ nombre: 'Don Pepito', texto: '¿Paso usted por mi casa?' }, { nombre: 'Don Jose', texto: 'Por su casa yo pase' }];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <main>
                    <Contador init={10} />
                    <p>Hola <span dangerouslySetInnerHTML={{ __html: nombre }} /></p>
                    <Saluda />
                    {listItems.map((item, index) =>
                        <Saluda key={index} name={item.nombre}>
                            <h2>Dice:</h2>
                            <p>{item.texto}</p>
                        </Saluda>)}
                    {listItems.map((item, index) => <Despide key={index} name={item.nombre} />)}
                </main>
            </div>

        );
    }
}