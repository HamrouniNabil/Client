import {combineReducers} from 'redux'
import authReducer from './authReducer';
import pitchReducer from './pitchReducer';


export default combineReducers({
    authReducer,
    pitchReducer
})