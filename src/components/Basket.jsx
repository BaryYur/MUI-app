import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@material-ui/core';
import { ShoppingBasket } from '@mui/icons-material';
import BasketItem from './BasketItem';

const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder
    } = props;

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List style={{ width: "400px" }}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Cart"/>
                </ListItem>
                <Divider />

                {!order.length ? (
                    <ListItem>Cart is empty</ListItem>
                ) : (
                    <React.Fragment>
                    {order.map((item) => (
                        <BasketItem 
                            key={item.name} 
                            {...item} 
                            removeFromOrder={removeFromOrder}
                        />
                    ))}
                    <Divider />
                    <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                            Total Quantity: {''}
                            {order.reduce((acc, item) => {
                                return acc + item.price * item.quantity;
                            }, 0)}{' '}
                            рублей.
                        </Typography>
                    </ListItem>
                    </React.Fragment>
                )}
            </List>
        </Drawer>
    );
};

export default Basket;