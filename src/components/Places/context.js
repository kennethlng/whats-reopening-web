import React from 'react';

const PlacesContext = React.createContext({
    places: [],
    updateFilters: () => null
});

export { PlacesContext }