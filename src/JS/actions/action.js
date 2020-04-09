import { REGISTER_USER, REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAIL } from "../constants/actions-types"
import axios from 'axios'

export const register = user =>async dispatch =>{
    dispatch({
        type:REGISTER_USER

    })
    try {
        const registerResult = await axios.post('/register',user)
         dispatch({
             type:REGISTER_SUCCESS,
             payload:registerResult.data 
         })
        
    } catch (error) {
        dispatch({
            type:REGISTER_FAIL,
            payload:error.response.data.errors
        })
    }
}

export const login = userCred => async dispatch =>{
    dispatch({
        type:LOGIN_USER
    })
    try {
        const loginResult = await axios.post('/login',userCred);
        localStorage.setItem('token',loginResult.data.token);
        dispatch({
            type:LOGIN_SUCCESS,
        
        })
        
    } catch (error) {
        dispatch({
        type:LOGIN_FAIL,
        payload:error.response.data.errors

    })
        
    }
}