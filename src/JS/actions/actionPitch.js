import { GET_PITCHS, GET_ONE_PITCH } from '../constants/actions-types';
import axios from 'axios';

export const getPitchs = () => dispatch => {
  console.log('getpitches')
  axios.get("/Pitchs")
    .then(res => dispatch({ type: GET_PITCHS, payload: res.data }))
    .catch(err => console.log(err))
}

export const getOnePitch = id => dispatch => {
  axios.get(`/getOnePitch/${id}`)
    .then(res => dispatch({ type: GET_ONE_PITCH, payload: res.data }))
}

export const addPitch = newPitch => dispatch => {
  const config = {
    // headers: {
    //   'content-type': 'multipart/form-data'
    // }
  };
  console.log('add new pitch')
  axios.post("/Add-pitch", newPitch, config)
    // .then(res => dispatch(getPitchs()))
    .catch(err => console.log(err))
}

export const deletePitch = id => dispatch => {
  axios.delete(`/delete-pitch/${id}`)
    .then(res => dispatch(getPitchs()))
    .catch(err => console.log(err))
}

export const editPitch = (id, updatePitch) => dispatch => {
  axios.put(`/edit-pitch/${id}`, updatePitch)
    .then(res => dispatch(getPitchs()))
    .catch(err => console.log(err))
}