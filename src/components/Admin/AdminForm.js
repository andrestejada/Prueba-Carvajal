import React, { useState } from 'react'
import { guardarPeliculas } from '../../actions/peliculasActions'
import Alert from '../alert/Alert'

const AdminForm = () => {
  const initialState = {
    codigo: '',
    nombre: '',
    descripcion: '',
    hora1: '',
    hora2: '',
    hora3: '',
    imagen: '',
    sala: ''
  }

  const [formvalues, setformvalues] = useState(initialState)
  const [error, setError] = useState(false)

  const { nombre, codigo, descripcion, hora1,hora2,hora3, imagen, sala } = formvalues

  const handleOnchange = e => {
    setformvalues({
      ...formvalues,
      [e.target.name]: e.target.value
    })
  }

  const getImage = e => {
    const imagen = e.target.files[0]
    setformvalues({
      ...formvalues,
      imagen
    })
  }

  

  const handleSubmit = e => {
    e.preventDefault()
    if (
      codigo.trim() === '' ||
      nombre.trim() === '' ||
      descripcion.trim() === '' ||
      hora1.trim() === ''||
      hora2.trim() === ''||
      hora3.trim() === ''||
      sala===''
    ) { 
        setError(true)
        return  
    }
    setError(false)
    guardarPeliculas(formvalues)
    setformvalues(initialState)
  }

  return (
    <form className='admin-form-box' onSubmit={handleSubmit}>
      <h3>Ingresa los datos para crear una nueva pelicula</h3>
      <div className='mb-3'>
        <label className='form-label'>Codigo</label>
        <input
          type='text'
          className='form-control'
          placeholder='Codigo'
          name='codigo'
          value={codigo}
          onChange={handleOnchange}
        />
      </div>
      <div  className='mb-3'>
        <label className='form-label'>Nombre</label>
        <input
          type='text'
          className='form-control'
          placeholder='nombre'
          name='nombre'
          value={nombre}
          onChange={handleOnchange}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Descripcion</label>
        <input
          type='text'
          className='form-control'
          placeholder='Descripcion'
          name='descripcion'
          value={descripcion}
          onChange={handleOnchange}
        />
      </div>
      <div id='hour' className='mb-3'>
        <label className='form-label'>Hora</label>
        <input
          type='time'
          className='form-control mt-2'
          name='hora1'
          value={hora1}
          onChange={handleOnchange}
        />
        <input
          type='time'
          className='form-control mt-2'
          name='hora2'
          value={hora2}
          onChange={handleOnchange}
        />
        <input
          type='time'
          className='form-control mt-2'
          name='hora3'
          value={hora3}
          onChange={handleOnchange}
        />
        
        </div>
      <div className='mb-3'>
       
      </div>
        <label className='form-label'>Imagen</label>
        <input
          type='file'
          className='form-control'
          placeholder='Descripcion'
          name='imagen'
          onChange={getImage}
          required
        />
      
      <div className='mb-3'>
        <label className='form-label'>Selecciona una sala</label>
        <select
          className='form-select'
          name='sala'
          value={sala}
          onChange={handleOnchange}
        >
          <option disabled  defaultValue selected>
            Escoge una sala
          </option>
          <option value='sala 1'>Sala 1</option>
          <option value='sala 2'>Sala 2</option>
          <option value='sala 3'>Sala 3</option>
        </select>
      </div>
      <div className='mb-3'>
        <button className='btn btn-primary' type='submit'>
          Guardar Pelicula
        </button>
        {
            error && <Alert mensaje='Todos los campos son obligatorios' />
        }
      </div>
    </form>
  )
}

export default AdminForm
