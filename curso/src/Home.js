import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Contador } from './contador'

function Saluda(props) {
    return (
        <React.Fragment>
            <h1>Hola {props.name && props.name.toUpperCase()}</h1>
            {props.children}
        </React.Fragment>
    );
}
class Despide extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>Adios {this.props.name}</h1>;
    }
}


function Confirmar(props) {
    return (
        <p>
            <button onClick={props.onOK} >Si</button>&nbsp;
            <button onClick={props.onCancel} >No</button>
        </p>
    );
}
export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.cont = 5;
        this.state = { cont: 7, valor: 7, boton: '' };
    }
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
                    <Contador init={this.state.cont} onCambia={valor => this.setState({ valor })} onClick={valor => this.setState({ boton: valor })} />
                    <p><button onClick={(ev) => this.setState(prev => ({ cont: prev.cont + 1 }))} >Cambia</button>
                    Valor actual es {this.state.valor} {this.state.boton}
                    </p>
                    <Confirmar onOK={(ev) => alert('Dice que OK')}  onCancel={(ev) => alert('Cancela')}/>
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