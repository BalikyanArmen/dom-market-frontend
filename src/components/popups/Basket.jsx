import React, { useState } from "react";
import { Drawer, Typography, IconButton, Button, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { BasketCard } from "../BasketCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {handleDeleteBasketProduct} from "../../toolkit/productSlice.js";

export const BasketDialog = ({ isOpen, handleClose }) => {
    const mockProducts = useSelector(state =>state.product.basketProducts);
    const dispatch = useDispatch();
    // Calculate total sum of products
    const totalSum = mockProducts.reduce((acc, curr) => acc + curr.price, 0);

    // Function to handle deletion of a product
    const handleDelete = (productId) => {

        // Filter out the product with the given productId
        // const updatedProducts = mockProducts.filter(product => product.id !== productId);
        // // Update the state to reflect the deleted product
        // setMockProducts(updatedProducts);

        dispatch(handleDeleteBasketProduct({
            data:{
                basketProducts:mockProducts,
                productId
            }
        }))
    };

    return (
        <Drawer anchor="right" open={isOpen} onClose={handleClose}>
            <Box sx={{
                width: 300, // Set the width of the drawer
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "16px"
            }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography variant="h6">Basket</Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
                    {mockProducts.map((product) => (
                        <BasketCard key={product.id} name={product.name} price={product.price}
                                    onDelete={() => handleDelete(product.id)} count={product.count}/>
                    ))}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                        <Typography variant="h6" fontWeight="bold">Total:</Typography>
                        <Typography variant="h6">{totalSum} ₽</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Button onClick={handleClose} color="primary">
                            Continue Shopping
                        </Button>
                        <Button onClick={handleClose} color="primary" variant="contained">
                            Go to Cart
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
};
