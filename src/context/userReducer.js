import { GET_USER_DATA, SET_USER_DATA } from "./types.js";

export default (state, action)=>{
    const {payload, type} = action;
    
    switch(type){
        case GET_USER_DATA:
            return{
                ...state,
                user: payload
            };
            default:
                return state;
    }
};