import React from 'react';

const AddPlaceContext = React.createContext({
    loading: false, 
    name: '',
    status: '',
    openingDate: '',
    isAffiliated: false,
    affiliateName: '',
    affiliateEmail: '',
    notes: '',
    updateName: (name) => null,
    updateStatus: (status) => null,
    updateOpeningDate: (date) => null,
    updateAffiliateName: (name) => null,
    updateAffiliateEmail: (email) => null,
    updateNotes: (notes) => null
});

export { AddPlaceContext }