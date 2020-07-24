import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import * as CONSTANTS from '../../constants/places'; 
import Status from '../Status'; 
import Grid from '@material-ui/core/Grid'; 
import * as api from '../../api/googleMaps'; 

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: 200
    },
    cover: {
        width: 200
    },
    details: {
        padding: theme.spacing(2)
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
        maxWidth: '100%',
        maxHeight: '200px',
        // margin: 'auto'
    }
}))

export default function PlacesGridListCard(props) {
    const { place } = props;
    const classes = useStyles(); 
    const [image, setImage] = useState(null); 
    
    useEffect(() => {
        api.placePhoto(place.photos[0]["photo_reference"], 200)
        .then(response => {
            var string = Buffer.from(response.data, 'binary').toString('base64');
            setImage(string); 
        })
    }, [])

    const formatDate = () => {
        var formattedDate = place[CONSTANTS.OPENING_DATE].toISOString().substring(0, 10); 
        return formattedDate
    }

    return (
        <Grid container>
            <Grid item xs={12} sm={6} lg={4}>
                <img className={classes.img} src={`data:image/jpeg;base64,${image}`} />
            </Grid>
            <Grid item xs container spacing={2} direction="column" justify="space-between" className={classes.details}>
                <Grid item xs>
                    <Typography variant="h6">
                        {place[CONSTANTS.MAIN_TEXT]}
                    </Typography>
                    <Typography variant="subtitle1">
                        {place[CONSTANTS.SECONDARY_TEXT]}
                    </Typography>
                </Grid>
                <Grid item container direction="row" alignItems="flex-end">
                    <Grid item xs>
                        <Status status={place[CONSTANTS.STATUS]} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">
                            Reopening <b>{formatDate()}</b>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        // <Card className={classes.root}>
        //     <CardMedia
        //         className={classes.cover}
        //         title=""
        //     />
        //     <div className={classes.details}>
        //         <CardContent className={classes.content}>
        //             <Grid container>
        //                 <Grid item xs>
                            
        //                 </Grid>
        //                 <Grid item className={classes.date}>
        //                 </Grid>
        //             </Grid>
        //         </CardContent>
        //     </div>
        // </Card>
    )
}