import React from 'react';
import Button from '@material-ui/core/Button';

export default function PlacesFiltersButton(props) {
    return (
        <Button variant="outlined" color="primary" onClick={() => props.onClick()}>
            More filters
        </Button>
    )
}