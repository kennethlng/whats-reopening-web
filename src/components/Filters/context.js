import React from 'react';
import { INITIAL_STATE } from './initialState'; 

const FiltersContext = React.createContext({
    options: INITIAL_STATE,
    updateOptions: (options) => {}
}); 

export default FiltersContext; 