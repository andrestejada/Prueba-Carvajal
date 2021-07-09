import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPeliculas } from '../../actions/peliculasActions'
import Navbar from '../Login/Navbar'
import UserCard from './UserCard'
import './users.scss'

const Users = () => {

    const dispatch = useDispatch()
    const {peliculas} = useSelector(state => state.peliculas)

    useEffect(() => {
        dispatch(getPeliculas())
    }, [])
    //dispatch( getPeliculas() )
    console.log('me renderize')
    
    return (
        <>
        <Navbar/>
        <div className='container' >
        <h2 className='mt-2 text-center' >Descubre todas la peliculas que tenemos disponibles</h2>
        <hr/>
            <div class="row">
                {
                peliculas.map( (peli,i)=>(

                    <UserCard
                        key={i}
                        nombre={peli.nombre}
                        descripcion={peli.descripcion}
                        url={peli.url}
                        sala={peli.sala}
                        hora1={peli.hora1}
                        hora2={peli.hora2}
                        hora3={peli.hora3}
                    />
                ))
                }
            </div>
        </div>
        </>
    )
}

export default Users
