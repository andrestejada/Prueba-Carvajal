import { db } from "../firebase/firebase-config";
import { subirImagen } from "../helpers/subirImagen"
import Swal from 'sweetalert2'
import { OBTENER_PELICULAS } from "../types";


export const guardarPeliculas = async(pelicula)=>{
    const {
        nombre,
        codigo,
        descripcion,
        hora1,
        hora2,
        hora3,
        imagen,
        sala,
    }= pelicula;

    const url = await subirImagen(imagen)

    await db.collection('peliculas').add({
        nombre,
        codigo,
        descripcion,
        hora1,
        hora2,
        hora3,
        url,
        sala,
    })

    Swal.fire({
        title:'Genial',
        text:'La Pelicula se guardo correctamente',
        icon:'success'
    })
}


export const consultarPeliculas= async()=>{
    
        const resp = await db.collection('peliculas').get()

        const pelis = []

        resp.forEach( doc=>{
            pelis.push(doc.data())
        })

       return pelis
    
        
}

export const getPeliculas =()=>{
    return async(dispatch)=>{
        try {
            const resp = await consultarPeliculas()
            dispatch(obtenerPeliculas(resp))
        } catch (error) {
            console.log(error)
        }
        
    }
}


const obtenerPeliculas =(peliculas)=>({
    type:OBTENER_PELICULAS,
    payload:peliculas
})