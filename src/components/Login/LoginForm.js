import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signInWithEmailAndPassword } from '../../actions/authActions'
import  Alert  from '../alert/Alert';

const LoginForm = () => {
    const dispatch = useDispatch();
    const initialState={
        correo:'usuario1@peliculas.com',
        contraseña:'123456'
    }

    const [formValues, setFormValues] = useState(initialState)
    const [error, setError] = useState(false)
    
    const handleOnchange =(e)=>{
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    const {correo, contraseña}= formValues;
    
    const handleOnsubmit=(e)=>{
        e.preventDefault()

        if( correo.trim()===''||contraseña.trim()===''){
            setError(true)
            return
        }

        dispatch(signInWithEmailAndPassword(correo,contraseña))


    }
    return (
        
            <form 
                className='form-box'
                onSubmit={handleOnsubmit}
            >
                <h2>Iniciar seccion </h2>
                <hr/>
                <div className="mb-3">
                    <label  className="form-label">Correo</label>
                    <input 
                        type="email" 
                        className="form-control"
                        name='correo'
                        value={correo}
                        onChange={handleOnchange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control"
                        name='contraseña'
                        value={contraseña}
                        onChange={handleOnchange} 
                    />
                </div>
                {
                    error && <Alert mensaje='El correo y la contraseña son obligatorios' />
                }
                <button type="submit" className="btn btn-primary">Iniciar seccion</button>
            </form>
        
    )
}

export default LoginForm
