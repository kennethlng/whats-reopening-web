import React from 'react';

const AddPlaceContext = React.createContext({
    loading: false, 
    step: 0,
    googlePlacePrediction: null,
    status: '',
    openingDate: '',
    isAffiliated: false,
    contactName: '',
    contactEmail: '',
    notes: '',
    updateStep: (step) => null,
    updateStatus: (status) => null,
    updateGooglePlacePrediction: (prediction) => null,
    updateOpeningDate: (date) => null,
    updateIsAffiliated: (isAffiliated) => null,
    updateContactName: (name) => null,
    updateContactEmail: (email) => null,
    updateNotes: (notes) => null,
    submit: () => null
});

export const withAddPlace = Component => props => (
    <AddPlaceContext.Consumer>
        {(value) => <Component {...props} addPlaceContextValue={value} />}
    </AddPlaceContext.Consumer>
)

export default withAddPlace
export { AddPlaceContext }