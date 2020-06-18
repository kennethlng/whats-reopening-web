import React from 'react';
import PlacesList from './PlacesList';
import { withFirebase } from '../Firebase'; 
import { withStyles } from '@material-ui/core/styles'
import Place from '../../models/Place';

const styles = theme => ({

})

class Places extends React.Component {
    state = {
        loading: false,
        places: []
    }

    componentDidMount() {
        this.setState({
            loading: true
        }, () => {
            this.props.firebase.places().get() 
                .then(function(querySnapshot) {
                    var places = []
                    querySnapshot.forEach(function(doc) {
                        let data = doc.data()
                        let newPlace = new Place(doc.id, data.placeId, data.name)
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
            <div>
                <PlacesList
                    places={this.state.places}
                />
            </div>
        )
    }
}

export default withFirebase(withStyles(styles)(Places)); 