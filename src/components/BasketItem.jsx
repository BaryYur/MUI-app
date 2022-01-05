import { IconButton, ListItem, Typography } from "@material-ui/core";
import { Close } from '@mui/icons-material';

const BasketItem = ({ removeFromOrder, id, quantity, name, price }) => {
    return (
        <ListItem>
            <Typography variant="body1">{name} {price}руб x{quantity}</Typography>
            <IconButton
                className='btn btn-primary'
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;