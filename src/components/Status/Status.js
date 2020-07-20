import React from 'react';
import * as STATUS from '../../constants/status'; 
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    [STATUS.OPEN.ID]: {
        backgroundColor: green[500]
    },
    [STATUS.LIMITED_OPEN]: {
        backgroundColor: lightGreen[500]
    },
    [STATUS.TEMPORARILY_CLOSED]: {
        backgroundColor: orange[500]
    },
    [STATUS.PERMANENTLY_CLOSED]: {
        backgroundColor: purple[500]
    }
}))

export default function Status(props) {
    const classes = useStyles();

    switch(props.status) {
        case STATUS.OPEN.ID: 
            return <Chip label={STATUS.OPEN.TITLE} className={classes[STATUS.OPEN.ID]}/>;
        case STATUS.LIMITED_OPEN.ID: 
            return <Chip label={STATUS.LIMITED_OPEN.TITLE} className={classes[STATUS.LIMITED_OPEN.ID]}/>;
        case STATUS.TEMPORARILY_CLOSED.ID: 
            return <Chip label={STATUS.TEMPORARILY_CLOSED.TITLE} className={classes[STATUS.TEMPORARILY_CLOSED.ID]}/>;
        case STATUS.PERMANENTLY_CLOSED.ID: 
            return <Chip label={STATUS.PERMANENTLY_CLOSED.TITLE} className={classes[STATUS.PERMANENTLY_CLOSED.ID]}/>;
        default: 
            return <Chip label={STATUS.TEMPORARILY_CLOSED.TITLE} className={classes[STATUS.TEMPORARILY_CLOSED.ID]}/>;
    }
}