import React from 'react'

const Alert = ({mensaje,tipo='danger'}) => {
    return (
        <div class={`alert alert-${tipo} mt-3`} role="alert">
             {mensaje}
        </div>
    )
}

export default Alert
