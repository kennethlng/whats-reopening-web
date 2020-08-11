import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { useHistory } from 'react-router-dom'; 
import FiltersDialog from './FiltersDialog';
import FiltersContext from './context'; 
import { INITIAL_STATE } from './initialState'; 

const useStyles = makeStyles((theme) => ({
    chips: {
        '& > *': {
            margin: theme.spacing(1),
        },
        marginBottom: theme.spacing(3)
    },
}));

export default function Filters() {
    const classes = useStyles(); 
    const history = useHistory();
    const [filtersDialogOpen, setFiltersDialogOpen] = useState(false); 
    const [options, setOptions] = useState(INITIAL_STATE)

    useEffect(
        () => {
            updateFilters(); 
        }, 
        [options]
    )

    const handleMoreFiltersClick = () => setFiltersDialogOpen(true); 

    const updateFilters = () => {
        var string = '?'; 

        //  Loop through each of the filter options to process them for react router history search
        for (const property in options) {
            const value = options[property]; 

            if (options.hasOwnProperty(property)) {
                switch(property) {
                    case "status": 
                        //  Loop through each status key value pair  
                        for (const s in value) {
                            const checked = value[s]; 
                            console.log(s, checked)
                            if (checked) string += `status[]=${s}`
                        }
                        break; 
                    default: 
                        break; 
                }
            }
        }

        history.push({
            search: string,
            
        })
    }

    return (
        <FiltersContext.Provider
            value={{
                options,
                updateOptions: (newOptions) => setOptions({ ...options, ...newOptions })
            }}
        >
            <div className={classes.chips}>
                <Chip
                    label="More filters"
                    onClick={handleMoreFiltersClick}
                    variant="outlined"
                />
            </div>
            <FiltersDialog
                open={filtersDialogOpen}
                onClose={() => setFiltersDialogOpen(false)}
            />
        </FiltersContext.Provider>
    )
}