import * as CONSTANTS from '../constants/server'; 
import axios from 'axios'; 

export const getPlaceDetails = (placeId) => {
    return axios.get(`${CONSTANTS.GOOGLE_MAPS_PLACES_DETAILS_URL}/${placeId}`)
} 

export const placeAutocomplete = (input) => {
    return axios.get(CONSTANTS.GOOGLE_MAPS_PLACES_AUTOCOMPLETE_URL, {
        params: {
            [CONSTANTS.INPUT]: input
        }
    })
}