import React from 'react';
import Typography from '@material-ui/core/Typography'; 
import Button from '@material-ui/core/Button'; 

export default function ThankYou() {
    const handleClick = () => {

    }

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                  Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order confirmation, and will
                send you an update when your order has shipped.
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick}
            >
                Add another place
            </Button>
        </React.Fragment>
    )
}