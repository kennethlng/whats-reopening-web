import React from 'react';
import { INITIAL_STATE } from '../Types';

const AddPlaceContext = React.createContext({
    loading: false, 
    step: 0,
    googlePlacePrediction: null,
    status: '',
    openingDate: '',
    isAffiliated: false,
    contactName: '',
    contactEmail: '',
    typeCheckedState: INITIAL_STATE,
    notes: '',
    updateStep: (step) => {},
    updateStatus: (status) => {},
    updateGooglePlacePrediction: (prediction) => {},
    updateOpeningDate: (date) => {},
    updateIsAffiliated: (isAffiliated) => {},
    updateContactName: (name) => {},
    updateContactEmail: (email) => {},
    updateNotes: (notes) => {},
    updateTypeCheckedState: (state) => {},
    submit: () => {}
});

export const withAddPlace = Component => props => (
    <AddPlaceContext.Consumer>
        {(value) => <Component {...props} addPlaceContextValue={value} />}
    </AddPlaceContext.Consumer>
)

export default withAddPlace
export { AddPlaceContext }