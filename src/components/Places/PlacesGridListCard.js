import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        display: 'flex'
    },
    cover: {
        width: 120
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: '1 0 auto'
    }
})

class PlacesGridListCard extends React.Component {
    render() {
        const { classes, place } = this.props; 

        return (
            <Card className={classes.root}>
                {/* <CardMedia
                    className={classes.cover}
                    image={}
                    title=""
                /> */}
                <div className={classes.details}>
                    <CardContent
                        className={classes.content}
                    >
                        <Typography component="h6" variant="h6">
                            {place.name}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(PlacesGridListCard); 