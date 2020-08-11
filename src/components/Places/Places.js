import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom'; 
import { FirebaseContext } from '../Firebase'; 
import Place from '../../models/Place';
import PlacesGrid from './PlacesGrid';
import { PlacesContext } from './context'; 
import * as CONSTANTS from '../../constants/places'; 
import Filters from '../Filters/Filters';

export default function Places() {
    const [loading, setLoading] = useState(false);
    const [places, setPlaces] = useState([]); 
    const firebase = useContext(FirebaseContext); 
    const location = useLocation(); 

    useEffect(
        () => {
            fetch(); 
        }, 
        [location]
    )

    const fetch = () => {
        if (loading) return; 

        setLoading(true); 

        var query = firebase.places()

        const searchParams = new URLSearchParams(location.search); 

        //  Filter by status
        var status = searchParams.getAll("status[]"); 
        if (status && status.length > 0) {
            query = query.where('status', 'in', status); 
        }

        //  Sort by reopening date
        query = query.orderBy(CONSTANTS.REOPENING_DATE)

        //  Limit search results
        query = query.limit(10)

        //  Perform query
        query.get()
        .then(function(querySnapshot) {
            var places = []
            querySnapshot.forEach(function(doc) {
                let data = doc.data()
                let newPlace = new Place(doc.id, data)
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

    return (
        <React.Fragment>
            <Filters/>
            <PlacesGrid 
                places={places}
            />
        </React.Fragment>
    )
}