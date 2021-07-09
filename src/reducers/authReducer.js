import { LOGIN_SUCCESS } from "../types";

const initialState={
        isAuth:false,
        loading:false,
        user:null,
        
}

export const authReducer =(state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth:true,
                user: action.payload
            };
        
        default:
            return state;
    }
}
