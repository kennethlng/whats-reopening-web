import React from 'react';
import * as STATUS from '../../constants/status'; 
import { makeStyles } from '@material-ui/core/styles';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

const useStyles = makeStyles(theme => ({
}))

export default function StatusIcon(props) {
    const classes = useStyles(); 

    switch (props.status) {
        case STATUS.OPEN.ID: 

    }
}