import React from 'react';
import Box from '@material-ui/core/Box'; 
import Typography from '@material-ui/core/Typography'; 
import Link from '@material-ui/core/Link'; 
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({ 
    root: {
        // marginBottom: theme.spacing(6)
        backgroundColor: theme.palette.background
    }
}))

export default function Footer() {
    const classes = useStyles(); 

    return (
        <Box p={12} mt={10} className={classes.root}> 
            <Typography variant="body2" color="textSecondary" align="center">
                Made with love by your friends in the community. 
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    WhatsReopening.com
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    )
}