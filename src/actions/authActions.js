import { LOGIN_SUCCESS } from "../types"
import {auth, db} from '../firebase/firebase-config'

export const signInWithEmailAndPassword=(correo,contraseña)=>{
    return async (dispatch)=>{
        try {
            const data = await auth.signInWithEmailAndPassword(correo,contraseña)
            const {user} = data
            const uid = user.uid
            const userRol = await await db.doc(`usuarios/${uid}`).get()
            const {rol}= userRol.data()
            
            dispatch(loginSuccess(uid,rol))
        } catch (error) {
            console.log(error)
        }
        
    }
}

const loginSuccess =(uid,rol)=>({
    type:LOGIN_SUCCESS,
    payload:{
        uid,
        rol,
    }    
})