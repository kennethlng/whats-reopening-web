import React from 'react';
import List from '@material-ui/core/List';
import PlacesListRow from './PlacesListRow'; 

const PlacesList = (props) => {
    const { places } = props; 
    return (
        <List>
            {places.map(place => (
                <PlacesListRow
                    place={place}
                />
            ))}
        </List>
    )
}

export default PlacesList; 