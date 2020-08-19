import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import * as CONSTANTS from '../../constants/places'; 
import { StatusChip } from '../Status'; 
import Grid from '@material-ui/core/Grid'; 
import * as api from '../../api/googleMaps'; 
import * as KEYS from '../../constants/keys'; 

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: 200
    },
    cover: {
        width: 200
    },
    details: {
        // padding: theme.spacing(2)
        // display: 'flex',
        // flexDirection: 'column',
        // width: '100%'
    },
    content: {
        flex: '1 0 auto'
    },
    spacer: {
        flexGrow: 1
    },
    date: {
        display: 'flex',
        flexDirection: 'row'
        // marginLeft: theme.spacing(1)
    }, 
    img: {
        flex: 1,
        maxWidth: '100%'
    }
}))

export default function PlacesGridListCard(props) {
    const { place } = props;
    const classes = useStyles(); 
    const [image, setImage] = useState(null); 
    
    useEffect(() => {
        // api.placePhoto(place.photos[0]["photo_reference"], 400)
        // .then(response => {
        //     var string = Buffer.from(response.data, 'binary').toString('base64');
        //     setImage(string); 
        // })
    }, [])

    const formatDate = () => {
        var formattedDate = place[CONSTANTS.REOPENING_DATE].toISOString().substring(0, 10); 
        return formattedDate
    }

    return (
        <Grid container item direction="column">
            <Grid item>
                <img className={classes.img} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0]["photo_reference"]}&key=${KEYS.MAPS_API_KEY}`}/>
            </Grid>
            <Grid item xs container spacing={2} direction="column" justify="space-between" className={classes.details}>
                <Grid item xs>
                    <Typography variant="body1">
                        {place[CONSTANTS.MAIN_TEXT]}
                    </Typography>
                    {/* <Typography variant="caption">
                        {place[CONSTANTS.SECONDARY_TEXT]}
                    </Typography> */}
                    <Typography variant="subtitle1" noWrap>
                        <i>{place[CONSTANTS.NOTES]}</i>
                    </Typography>
                </Grid>
                {/* <Grid item container direction="row" alignItems="flex-end">
                    <Grid item xs>
                        <StatusChip status={place[CONSTANTS.STATUS]} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">
                            Reopening <b>{formatDate()}</b>
                        </Typography>
                    </Grid>
                </Grid> */}
            </Grid>
        </Grid>
    )
}