import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './Componente-B';


class ComponenteA extends Component {
   

    render() {
        return (
            <div>
                <h1>
                    Contacto:
                </h1>
                <h2>Nombre: {this.props.name} </h2>
                <h2>Apellido: {this.props.lastname} </h2>
                <h3>Email: {this.props.email} </h3>
                {/* <h3>Conectado: {this.props.online ? 'Esta conectado' : 'Esta desconectado'} </h3> */}
                <ComponenteB contacto = {true} />
            </div>

            
        );
    }
}


ComponenteA.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    online: PropTypes.bool
};


export default ComponenteA;
