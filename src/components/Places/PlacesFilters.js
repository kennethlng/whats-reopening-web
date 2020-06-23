import React from 'react';
import PlacesFiltersButton from './PlacesFiltersButton';
import PlacesFiltersDialog from './PlacesFiltersDialog'; 

class PlacesFilters extends React.Component {
    state = {
        dialogOpen: false
    }

    handleButtonClick = () => {
        this.setState({
            dialogOpen: true
        })
    }

    handleDialogClose = () => {
        this.setState({
            dialogOpen: false
        })
    }

    render() {
        const { dialogOpen } = this.state

        return (
            <div>
                <PlacesFiltersButton onClick={this.handleButtonClick}/>
                <PlacesFiltersDialog open={dialogOpen} onClose={this.handleDialogClose} />
            </div>
        )
    }
}

export default PlacesFilters; 