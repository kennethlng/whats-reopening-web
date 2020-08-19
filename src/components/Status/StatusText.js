import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as STATUS from '../../constants/status'; 

export default function StatusText(props) {
    switch(props.status) {
        case STATUS.OPEN.ID: 
            return <Typography variant="body1" style={{ color: STATUS.OPEN.COLOR }}>{STATUS.OPEN.TITLE}</Typography>
        case STATUS.LIMITED_OPEN.ID: 
            return <Typography variant="body1" style={{ color: STATUS.LIMITED_OPEN.COLOR }}>{STATUS.LIMITED_OPEN.TITLE}</Typography>
        case STATUS.TEMPORARILY_CLOSED.ID: 
            return <Typography variant="body1" style={{ color: STATUS.TEMPORARILY_CLOSED.COLOR }}>{STATUS.TEMPORARILY_CLOSED.TITLE}</Typography>
        case STATUS.PERMANENTLY_CLOSED.ID: 
            return <Typography variant="body1" style={{ color: STATUS.PERMANENTLY_CLOSED.COLOR }}>{STATUS.PERMANENTLY_CLOSED.TITLE}</Typography>
        default: 
            return <Typography variant="body1" style={{ color: STATUS.OTHER.COLOR }}>{STATUS.OTHER.TITLE}</Typography>
    }
}