import React from 'react';

const AddPlaceContext = React.createContext({
    loading: false, 
    googlePlacePrediction: null,
    status: '',
    openingDate: '',
    isAffiliated: false,
    affiliateName: '',
    affiliateEmail: '',
    notes: '',
    updateStatus: (status) => null,
    updateGooglePlace: (prediction) => null,
    updateOpeningDate: (date) => null,
    updateAffiliateName: (name) => null,
    updateAffiliateEmail: (email) => null,
    updateNotes: (notes) => null
});

export const withAddPlace = Component => props => (
    <AddPlaceContext.Consumer>
        {(value) => <Component {...props} addPlaceContext={value} />}
    </AddPlaceContext.Consumer>
)

export default withAddPlace
export { AddPlaceContext }