import React from 'react';
import { AddPlaceContext } from './context';
import { withStyles } from '@material-ui/core/styles';
import NameTextField from './NameTextField'; 
import StatusSelect from './StatusSelect';
import OpeningDatePicker from './OpeningDatePicker'; 
import Affiliate from './Affiliate'; 
import NotesTextField from './NotesTextField';
import * as api from '../../api'; 
import * as CONSTANTS from '../../constants/database'; 
import Button from '@material-ui/core/Button'; 
import Backdrop from '@material-ui/core/Backdrop'; 
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    root: {

    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    }
})

class AddPlace extends React.Component {
    state = {
        loading: false, 
        name: '',
        status: '',
        openingDate: '',
        isAffiliated: false,
        affiliateName: '',
        affiliateEmail: '',
        notes: '',
        snackbarOpen: false
    }

    handleSubmit = (e) => {
        e.preventDefault(); 

        const { name, status, openingDate, isAffiliated, affiliateName, affiliateEmail, notes } = this.state; 
        const _this = this; 

        this.setState({
            loading: true
        }, () => {  
            api.placesApi.places().add({
                [CONSTANTS.NAME]: name,
                [CONSTANTS.STATUS]: status,
                [CONSTANTS.OPENING_DATE]: openingDate,
                [CONSTANTS.IS_AFFILIATED]: isAffiliated,
                [CONSTANTS.AFFILIATE]: {
                    [CONSTANTS.NAME]: affiliateName,
                    [CONSTANTS.EMAIL]: affiliateEmail
                },
                [CONSTANTS.NOTES]: notes
            })
            .then(function(docRef) {
                _this.setState({ 
                    loading: false,
                    snackbarOpen: true
                })
            })
            .catch(function(error) {
                console.log("Error adding place: ", error); 
            })
        })
    }

    handleSnackbarClose = () => {
        this.setState({ snackbarOpen: false })
    }

    render() {
        const { classes } = this.props; 
        const { loading, name, status, openingDate, isAffiliated, affiliateName, affiliateEmail, snackbarOpen } = this.state; 

        return (
            <AddPlaceContext.Provider 
                value={{
                    loading, 
                    name, 
                    status, 
                    openingDate, 
                    isAffiliated, 
                    affiliateName, 
                    affiliateEmail, 
                    updateName: (name) => this.setState({ name }),
                    updateStatus: (status) => this.setState({ status }),
                    updateOpeningDate: (date) => this.setState({ openingDate: date }),
                    updateAffiliateName: (name) => this.setState({ affiliateName: name }),
                    updateAffiliateEmail: (email) => this.setState({ affiliateEmail: email }),
                    updateNotes: (notes) => this.setState({ notes })
                }}
            >
                <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <NameTextField/>
                    <StatusSelect/>
                    <OpeningDatePicker/>
                    <Affiliate/>
                    <NotesTextField/>
                    <Button variant="contained" color="secondary" type="submit" disabled={loading}>
                        Submit
                    </Button>
                </form>
                <Backdrop className={classes.backdrop} open={loading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={this.handleSnackbarClose}
                    message="Place successfully added "
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleSnackbarClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </AddPlaceContext.Provider>
        )
    }
}

export default withStyles(styles)(AddPlace);