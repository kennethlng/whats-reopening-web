import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Place from '../../models/Place';
import PlacesGrid from './PlacesGrid';
import { PlacesContext } from './context'; 
import * as api from '../../api'; 
import * as DB_CONSTANTS from '../../constants/database'; 
import PlacesFilters from './PlacesFilters'; 

const styles = theme => ({

})

class Places extends React.Component {
    state = {
        loading: false,
        places: []
    }

    componentDidMount() {
        this.fetch()
    }

    fetch() {
        this.setState({
            loading: true
        }, () => {
            var query = api.placesApi.places()
            query = query.orderBy(DB_CONSTANTS.OPENING_DATE)
            query = query.limit(10)
            query.get()
                .then(function(querySnapshot) {
                    var places = []
                    querySnapshot.forEach(function(doc) {
                        let data = doc.data()
                        let newPlace = new Place(doc.id, data.googlePlaceId, data.name)
                        places.push(newPlace)
                    })

                    return places
                })
                .then(places => {
                    this.setState({
                        places,
                        loading: false
                    })
                })
                .catch(error => {
                    console.log(error)
                    this.setState({
                        loading: false
                    })
                })
        })
    }

    updateFilters() {
        console.log("filters updated")
    }

    render() {
        return (
            <PlacesContext.Provider value={{ places: this.state.places, updateFilters: this.updateFilters }}>    
                <PlacesFilters />
                <PlacesGrid />
            </PlacesContext.Provider>
        )
    }
}

export default withStyles(styles)(Places); 