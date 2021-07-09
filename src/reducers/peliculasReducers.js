import { OBTENER_PELICULAS } from "../types";

const initialState={
    peliculas:[]
}

export const PeliculasReducer =(state=initialState,action)=>{
    switch (action.type) {
        
        case OBTENER_PELICULAS:
            return{
                ...state,
                peliculas:action.payload
            }    
        default:
            return state;
    }
}
