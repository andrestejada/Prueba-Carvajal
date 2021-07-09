import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { PeliculasReducer } from "./peliculasReducers";

export const rootReducer = combineReducers({
    auth:authReducer,
    peliculas:PeliculasReducer
})