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
    updateGooglePlacePrediction: (prediction) => null,
    updateOpeningDate: (date) => null,
    updateIsAffiliated: (isAffiliated) => null,
    updateAffiliateName: (name) => null,
    updateAffiliateEmail: (email) => null,
    updateNotes: (notes) => null
});

export const withAddPlace = Component => props => (
    <AddPlaceContext.Consumer>
        {(value) => <Component {...props} addPlaceContextValue={value} />}
    </AddPlaceContext.Consumer>
)

export default withAddPlace
export { AddPlaceContext }