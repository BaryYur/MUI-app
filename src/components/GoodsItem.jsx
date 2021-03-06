import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';

const GoodsItem = (props) => {
    const { name, price, setOrder, poster } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    src={poster}
                    alt={name}
                    title={name}
                    style={{ height: "240px" }}
                />
                <CardContent>
                    <Typography variant="h6" component="h3">{name}</Typography>
                    <Typography variant="body">Цена: {price} руб.</Typography>
                </CardContent>    
                <CardActions>
                    <Button
                        variant='outlined'
                        className='btn btn-primary'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>    
            </Card>
        </Grid>
    );
};

export default GoodsItem;