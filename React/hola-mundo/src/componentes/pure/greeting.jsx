import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         age: 21
      }
    }       


    render() {
        return (
            <div>
                <h1> Edad {this.state.age} </h1>
                <h1> Hola {this.props.name} </h1>
                <div>
                <button onClick={this.birthday} >Cumplir</button>
                </div>
            </div>
        );
    }
    birthday = () => {
       this.setState((prevState) => (
           {
               age: prevState.age +1
           }
       ))
    }
}
 

Greeting.propTypes = {
    name: PropTypes.string
};


export default Greeting;
