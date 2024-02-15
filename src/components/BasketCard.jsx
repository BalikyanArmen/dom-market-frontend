import React, {useState} from "react";
import {Card as MaterialUICard, CardContent, CardActions, Typography, Button, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const BasketCard = ({name, price, onDelete, count}) => {
    const [quantity, setQuantity] = useState(count);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleDelete = () => {
        onDelete(); // Call the onDelete function passed from the parent component
    };

    return (
        <MaterialUICard variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary">
                    {price} ₽
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon/>
                </IconButton>
                <Button onClick={handleDecrement} variant="contained" size="small">-</Button>
                <Typography variant="h6">{quantity}</Typography>
                <Button onClick={handleIncrement} variant="contained" size="small">+</Button>
            </CardActions>
        </MaterialUICard>
    );
};
