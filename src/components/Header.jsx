import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { ShoppingBasket } from '@mui/icons-material';

function Header (props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h5"
                    component="span"
                    style={{flexGrow: 1}}
                    // sx={{flexGrow: 1}} //for v5
                >
                    MUI Shop
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={props.handleCart}
                >
                    <ShoppingBasket />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;