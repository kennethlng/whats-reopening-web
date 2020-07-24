import React from 'react';
import * as STATUS from '../../constants/status'; 
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { green, lightGreen, orange, purple } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types'; 

const useStyles = makeStyles(theme => ({
    [STATUS.OPEN.ID]: {
        backgroundColor: green[500],
        color: '#ffffff'
    },
    [STATUS.LIMITED_OPEN.ID]: {
        backgroundColor: lightGreen[500],
        color: '#ffffff'
    },
    [STATUS.TEMPORARILY_CLOSED.ID]: {
        backgroundColor: orange[500],
        color: '#ffffff'
    },
    [STATUS.PERMANENTLY_CLOSED.ID]: {
        backgroundColor: purple[500],
        color: '#ffffff'
    }
}))

export default function Status(props) {
    const classes = useStyles();

    switch(props.status) {
        case STATUS.OPEN.ID: 
            return (
                <Tooltip title={STATUS.OPEN.DESCRIPTION}>
                    <Chip label={STATUS.OPEN.TITLE} className={classes[STATUS.OPEN.ID]}/>
                </Tooltip>
            )
        case STATUS.LIMITED_OPEN.ID: 
            return (
                <Tooltip title={STATUS.LIMITED_OPEN.DESCRIPTION}>
                    <Chip label={STATUS.LIMITED_OPEN.TITLE} className={classes[STATUS.LIMITED_OPEN.ID]}/>
                </Tooltip>
            )
        case STATUS.TEMPORARILY_CLOSED.ID: 
            return (
                <Tooltip title={STATUS.TEMPORARILY_CLOSED.DESCRIPTION}>
                    <Chip label={STATUS.TEMPORARILY_CLOSED.TITLE} className={classes[STATUS.TEMPORARILY_CLOSED.ID]}/>
                </Tooltip>
            )
        case STATUS.PERMANENTLY_CLOSED.ID: 
            return (
                <Tooltip title={STATUS.PERMANENTLY_CLOSED.DESCRIPTION}>
                    <Chip label={STATUS.PERMANENTLY_CLOSED.TITLE} className={classes[STATUS.PERMANENTLY_CLOSED.ID]}/>
                </Tooltip>
            )
        default: 
            return (
                <Tooltip title="More information is needed">
                    <Chip label="Uncertain" />
                </Tooltip>
            )
    }
}

Status.propTypes = {
    status: PropTypes.string
}