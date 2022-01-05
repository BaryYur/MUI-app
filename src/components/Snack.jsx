import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const Snack = ({isOpen, handleClose = Function.prototype}) => {
    return (
        <Snackbar style={{ left: "150px" }} open={isOpen} onClose={handleClose} autoHideDuration="3000">
            <Alert soverity="success">Item adding to cart.</Alert>
        </Snackbar>
    );
};

export default Snack;