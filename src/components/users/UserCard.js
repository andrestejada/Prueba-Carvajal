import React, { useState } from 'react'
import Swal from 'sweetalert2'

const UserCard = ({nombre,descripcion,sala,url,hora1,hora2,hora3}) => {

    const [horaSelect, setHoraSelect] = useState({})

    const hadleRadioChange=(e)=>{

        setHoraSelect({
            hora: e.target.value
        })
    }

    const handleReserve=()=>{
        Swal.fire({
            title:'Genial',
            text:'La pelicula se ha reservado correctamente',
            icon:'success'
        })
    }
    return (
        <>
        <div className="col-md-4 col-sm-6 mt-2">
            <div className="card" >
                <img src={url} className="card-img-top " alt={nombre}/>
                <div className="card-body">
                    <h5 className="card-title text-capitalize text-primary">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                    <h6>Horario:</h6>
                    <div className="form-check">
                        <input className="form-check-input" 
                            id="flexRadioDefault1"
                            value={hora1}   
                            type="radio" 
                            name="hora"
                            onChange={hadleRadioChange}
                        />
                        <label className="form-check-label" for="flexRadioDefault1">
                            {hora1}
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            id="flexRadioDefault2" 
                            className="form-check-input" 
                            value={hora2} type="radio" 
                            name="hora" 
                            onChange={hadleRadioChange}
                        />
                        <label className="form-check-label"  for="flexRadioDefault2">
                            {hora2}
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            id="flexRadioDefault3" 
                            className="form-check-input" 
                            value={hora3} 
                            type="radio" 
                            name="hora" 
                            onChange={hadleRadioChange}
                        />
                        <label className="form-check-label"  for="flexRadioDefault3">
                            {hora3}
                        </label>
                    </div>
                    <h5 className='text-capitalize text-danger' >{sala}</h5>
                    <button  
                        className="btn btn-success"
                        onClick={ handleReserve}
                    >Reservar</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserCard
