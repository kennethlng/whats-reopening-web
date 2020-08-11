import React, { useContext, useEffect } from 'react';
import Filters from '../Filters/Filters';
import { useLocation } from 'react-router-dom'; 
import { FirebaseContext } from '../Firebase'; 

export default function PlacesSearch(props) {
    const { onChange } = props; 
    const firebase = useContext(FirebaseContext); 
    const [loading, setLoading] = useState(false);
    const location = useLocation(); 

    //  Whenever the url path changes, perform a fetch with the new updated query parameters (filters)
    useEffect(() => {
        fetch(); 
    }, [location])

    

    const fetch = () => {
        if (loading) return; 

        setLoading(true); 

        var query = firebase.places()

        const searchParams = new URLSearchParams(location.search); 
        searchParams.forEach((value, key) => {
            console.log(value, key); 
        })

        // for (var key in typeFilterCheckedState) {
        //     if (typeFilterCheckedState.hasOwnProperty(key)) {
        //         //  If the value is true (we only need to add the query condition for true)
        //         if (typeFilterCheckedState[key]) {
        //             query = query.where(key, "==", true); 
        //         }
        //     }
        // }

        query = query.orderBy(CONSTANTS.OPENING_DATE)
        query = query.limit(10)
        query.get()
        .then(function(querySnapshot) {
            var places = []
            querySnapshot.forEach(function(doc) {
                let data = doc.data()
                let newPlace = new Place(doc.id, data)
                places.push(newPlace)
            })

            onChange(places); 
            setLoading(false); 
        })
        .catch(error => {
            console.log("Error loading places: ", error)
            setLoading(false);
        })
    }
    
    return (
        <Filters/>
    )
}