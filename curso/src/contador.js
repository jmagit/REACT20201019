import React from 'react';
import PropTypes from 'prop-types';

export class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contador: +this.props.init };

        this.sube = this.sube.bind(this);

        this.baja = (ev) => {
            this.cambia(-this.props.delta, ev);
            ev.preventDefault();
        }
    }

    cambia(delta, ev) {
        let e = ev.target;
        this.setState((prev) => {
            const contador = prev.contador + delta;
            // if(contador < 0) throw new Error('es una demo de Error interno')
            if (this.props.onCambia)
                this.props.onCambia(contador);
            if (this.props.onClick)
                this.props.onClick(e.textContent);
            return { contador };
        });
    }

    sube(ev) {
        this.cambia(+this.props.delta, ev);
        ev.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <p>
                    <button onClick={this.sube} >Sube</button>&nbsp;
                    <button onClick={this.baja} >Baja</button>
                </p>
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
    delta: 1
};

