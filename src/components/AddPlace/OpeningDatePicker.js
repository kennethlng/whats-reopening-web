import React, { useContext } from 'react';
import { AddPlaceContext } from './context';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function OpeningDatePicker() {
    const context = useContext(AddPlaceContext); 
    const handleChange = (date) => context.updateOpeningDate(date);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disabled={context.loading}
                fullWidth
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                value={context.openingDate}
                onChange={handleChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    )
}