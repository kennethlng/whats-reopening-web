import React, { useContext } from 'react';
import Chip from '@material-ui/core/Chip';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import FiltersContext from './context'; 
import { INITIAL_STATE } from './initialState'; 

export default function ClearFiltersChip() {
    const filters = useContext(FiltersContext); 

    const handleClick = () => {
        filters.updateOptions(INITIAL_STATE);
    }

    return (
        <Chip variant="outlined" icon={<CancelRoundedIcon />} label="Clear filters" onClick={handleClick} />
    )
}