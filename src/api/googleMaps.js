import { URL } from '../constants/server'; 
import axios from 'axios'; 

export const getPlace = (placeId) => {
    return axios.get(`${URL}/google-maps/places/${placeId}`)
} 