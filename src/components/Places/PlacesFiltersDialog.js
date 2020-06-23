import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export default function PlacesFiltersDialog(props) {
    const { onClose, open } = props; 

    const handleClose = () => {
        onClose(); 
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
                Filters
            </DialogTitle>
            Dialog content
        </Dialog>
    )
}