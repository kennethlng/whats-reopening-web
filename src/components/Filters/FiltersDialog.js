import React, { useContext, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FiltersContext from './context'; 
import { TypeCheckboxGroup } from '../Types'; 
import { StatusCheckboxGroup } from '../Status'; 
import * as STATUS from '../../constants/status';
import { INITIAL_STATE } from './initialState';  

export default function FiltersDialog(props) {
    const { open, onClose, onDone, onCancel } = props; 
    const [options, setOptions] = useState(INITIAL_STATE); 
    const filters = useContext(FiltersContext); 

    const handleEnter = () => setOptions(filters.options); 

    const handleCancel = () => {
        onClose(); 
        onCancel(); 
    } 

    const handleDone = () => {
        filters.updateOptions(options)

        onClose(); 
        onDone(); 
    }

    const handleStatusCheckboxChange = (state) => {
        setOptions({ 
            ...options, 
            status: state 
        })
    }

    return (
        <div>
            <Dialog
                open={open}
                onEnter={handleEnter}
                onClose={() => onClose()}
            >
                <DialogTitle>Filters</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        
                    </DialogContentText>
                    <StatusCheckboxGroup
                        state={options.status}
                        onChange={handleStatusCheckboxChange}
                    />
                    {/* <TypeCheckboxGroup
                        state={places.typeFilterCheckedState}
                        onChange={handleTypeCheckedStateChange}
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                  </Button>
                    <Button onClick={handleDone} color="primary" autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

FiltersDialog.defaultProps = {
    onClose: () => {},
    onDone: () => {},
    onCancel: () => {}
}