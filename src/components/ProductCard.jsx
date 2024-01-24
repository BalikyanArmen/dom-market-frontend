import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import productImage from "../assets/product.png";

export default function ProductCard({title, description, price, rating, reviews, image}) {
    return (
        <Card sx={{maxWidth: 240, height: 382, margin: '15px'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={productImage}
                    alt="Product Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rating: {rating}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Reviews: {reviews}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
