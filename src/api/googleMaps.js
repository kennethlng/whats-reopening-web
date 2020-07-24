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

export const placePhoto = (photoReference, maxHeight) => {
    return axios.get(CONSTANTS.GOOGLE_MAPS_PLACES_PHOTO_URL, {
        params: {
            photoReference,
            maxHeight
            // key: "AIzaSyCL6zRyRrTnqsXXjlumfFI_ACSQINYhBCA"
        },
        responseType: 'arraybuffer'
    })
}