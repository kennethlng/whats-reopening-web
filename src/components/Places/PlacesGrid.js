import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import PlacesGridListCard from './PlacesGridListCard'; 
import { makeStyles } from '@material-ui/core/styles';
import { PlacesContext } from './context'; 

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function PlacesGrid() {
    const classes = useStyles();
    const context = useContext(PlacesContext); 

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid container item xs={6} spacing={3}>
                    {context.places.map(place => (
                        <Grid item xs={12}>
                            <PlacesGridListCard place={place}/>
                        </Grid>
                    ))}
                </Grid>
                <Grid container item xs={6} spacing={3}>
                    <Grid item>
                        Map
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}