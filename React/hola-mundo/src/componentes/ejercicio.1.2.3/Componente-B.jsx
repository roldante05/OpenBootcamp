import React from 'react'
import PropTypes from 'prop-types'

function ComponenteB(props){
   
  return (
    <div>
        <h1> Estado : {props.contacto ? 'En linea' : 'No disponible'} </h1>
    </div>
  )
}

ComponenteB.propTypes = {
    online:PropTypes.bool
}

export default ComponenteB;
