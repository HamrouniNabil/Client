import {GET_PITCHS,GET_ONE_PITCH} from '../constants/actions-types';


const initialState ={
    Pitchs:[]
}

export const pitchReducer = (state=initialState,action)=>{
    switch (action.type) {
        case GET_PITCHS:
         return {
             ...state,
            Pitchs:action.payload
        }   

             case GET_ONE_PITCH:
              return{
                  ...state,
                  Pitchs:action.payload.id
              }   
         
         default:
             return state;           
    }
}

export default pitchReducer