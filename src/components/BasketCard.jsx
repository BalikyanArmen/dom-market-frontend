import React, {useState} from "react";
import {Card as MaterialUICard, CardContent, CardActions, Typography, Button, IconButton, Box} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
            <CardActions sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2}}>
                <Box sx={{display:"flex",justifyContent: "space-between"}}>
                    <IconButton onClick={handleDecrement} variant="outlined" disabled={quantity === 1 } >
                        <RemoveIcon/>
                    </IconButton>
                    <Typography variant="h6" sx={{
                        width: '58px',
                        height: '42px',
                        textAlign: 'center'
                    }}>{quantity}</Typography>
                    <IconButton onClick={handleIncrement} variant="outlined">
                        <AddIcon />
                    </IconButton>
                </Box>
                <IconButton  onClick={handleDelete} variant="outlined">
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </MaterialUICard>
    );
};
