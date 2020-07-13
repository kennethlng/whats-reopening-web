import React from 'react';
import { AddPlaceContext } from './context';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'; 
import StatusSelect from './StatusSelect';

const styles = theme => ({
    root: {

    }
})

class AddPlace extends React.Component {
    state = {
        name: '',
        status: '',
        openingDate: '',
        isAffiliated: false,
        affiliateName: '',
        affiliateEmail: '',
        notes: ''
    }

    update = (name) => {
        this.setState({
            name
        })
    }

    handleSubmit = () => {

    }

    render() {
        const { classes } = this.props; 
        const { name, status, openingDate, isAffiliated, affiliateName, affiliateEmail } = this.state; 

        return (
            <AddPlaceContext.Provider 
                value={{ 
                    name, 
                    status, 
                    openingDate, 
                    isAffiliated, 
                    affiliateName, 
                    affiliateEmail, 
                    update: this.update, 
                    updateStatus: (status) => this.setState({ status })  
                }}
            >
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField variant="outlined" label="Place name" required onChange={(e) => this.setState({ name: e.target.value })}/>
                    <StatusSelect/>
                </form>
            </AddPlaceContext.Provider>
        )
    }
}

export default withStyles(styles)(AddPlace);