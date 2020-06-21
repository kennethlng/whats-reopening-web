import React from 'react';
import { withFirebase } from '../Firebase'; 
import { withStyles } from '@material-ui/core/styles'
import Place from '../../models/Place';
import PlacesGrid from './PlacesGrid';
import { PlacesContext } from './context'; 

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
            this.props.firebase.places().get() 
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

    render() {
        return (
            <PlacesContext.Provider value={{ places: this.state.places }}>    
                <PlacesGrid
                    places={this.state.places}
                />
            </PlacesContext.Provider>
        )
    }
}

export default withFirebase(withStyles(styles)(Places)); 