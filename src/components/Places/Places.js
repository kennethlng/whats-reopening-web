import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { FirebaseContext } from '../Firebase'; 
import Place from '../../models/Place';
import PlacesGrid from './PlacesGrid';
import { PlacesContext } from './context'; 
import * as CONSTANTS from '../../constants/places'; 
import PlacesFilters from './PlacesFilters'; 

const useStyles = makeStyles(theme => ({

}))

export default function Places() {
    const [loading, setLoading] = useState(false);
    const [places, setPlaces] = useState([]); 
    const firebase = useContext(FirebaseContext); 

    useEffect(() => {
        fetch(); 
    }, [])

    const fetch = () => {
        setLoading(true); 

        var query = firebase.places()
        query = query.orderBy(CONSTANTS.OPENING_DATE)
        query = query.limit(10)
        query.get()
        .then(function(querySnapshot) {
            var places = []
            querySnapshot.forEach(function(doc) {
                let data = doc.data()
                let newPlace = new Place(doc.id, data.googlePlaceId, data.name)
                places.push(newPlace)
            })

            setPlaces(places);
            setLoading(false); 
        })
        .catch(error => {
            console.log("Error loading places: ", error)
            setLoading(false);
        })
    }

    const updateFilters = () => {
        console.log("filters updated")
    }

    return (
        <PlacesContext.Provider 
            value={{ 
                places,
                updateFilters: updateFilters 
            }}
        >    
            {/* <PlacesFilters /> */}
            {/* <PlacesGrid /> */}
        </PlacesContext.Provider>
    )
}