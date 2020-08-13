import React from 'react';
import Grid from '@material-ui/core/Grid';
import PlacesGridListCard from './PlacesGridListCard'; 
import { makeStyles } from '@material-ui/core/styles';

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

export default function PlacesGrid(props) {
    const { places } = props; 
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid container item xs spacing={3}>
                    {places.map(place => (
                        <Grid item xs={12} key={place.id}>
                            <PlacesGridListCard place={place}/>
                        </Grid>
                    ))}
                </Grid>
                {/* <Grid container item lg={4} md={0} spacing={3}>
                    <Grid item>
                        Map
                    </Grid>
                </Grid> */}
            </Grid>
        </div>
    )
}