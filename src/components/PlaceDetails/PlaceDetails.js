import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as googleMapsApi from '../../api/googleMaps'; 

class PlaceDetails extends React.Component {
    state = {
        loading: false,
        name: '',
        address: ''
    }

    componentDidMount() {
        this.fetch()
    }

    fetch() {
        const { place } = this.props;

        this.setState({
            loading: true
        }, () => {  
            googleMapsApi.getPlace(place.googlePlaceId)
                .then(result => {
                    const data = result.data
                    this.setState({
                        loading: false,
                        name: data["name"],
                        address: data["formatted_address"]
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }

    render() {
        const { name, address } = this.state
        return (
            <Typography>
                { name }
            </Typography>
        )
    }
}

export default PlaceDetails; 