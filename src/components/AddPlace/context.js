import React from 'react';

const AddPlaceContext = React.createContext({
    name: '',
    status: '',
    openingDate: '',
    isAffiliated: false,
    affiliateName: '',
    affiliateEmail: '',
    notes: '',
    update: () => null,
    updateStatus: (status) => null,
    updateOpeningDate: (date) => null,
    updateAffiliateName: (name) => null,
    updateAffiliateEmail: (email) => null
});

export { AddPlaceContext }