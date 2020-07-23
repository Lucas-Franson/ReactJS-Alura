import React from 'react';
import SnackBar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default ({ open, handleClose, children, severity }) => {
    return (
        <SnackBar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                variant="filled"
                severity={severity}
            >
                {children}
            </Alert>
        </SnackBar>
    )
}