import React, {useState} from "react";
import {Drawer, Typography, IconButton, Button, Box} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {BasketCard} from "../BasketCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {handleDeleteBasketProduct} from "../../toolkit/productSlice.js";
import {useNavigate} from "react-router-dom";

export const BasketDialog = ({isOpen, handleClose}) => {
    const mockProducts = useSelector(state => state.product.basketProducts);
    const dispatch = useDispatch();
    const totalSum = mockProducts.reduce((acc, curr) => acc + curr.price, 0);
    const navigate = useNavigate();

    const handleDelete = (productId) => {
        dispatch(handleDeleteBasketProduct({
            data: {
                basketProducts: mockProducts,
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
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2}}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                    <Typography variant="h6">Кoрзина</Typography>
                </Box>
                <Box sx={{flexGrow: 1, overflowY: "auto"}}>
                    {mockProducts.map((product) => (
                        <BasketCard key={product.id} name={product.name} price={product.price}
                                    onDelete={() => handleDelete(product.id)} count={product.count}/>
                    ))}
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", mt: 2}}>
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2}}>
                        <Typography variant="h6" fontWeight="bold">Total:</Typography>
                        <Typography variant="h6">{totalSum} ₽</Typography>
                    </Box>
                    <Box sx={{display: "flex"}}>
                        <Button onClick={handleClose} color="primary">
                            Продолжать просмотр
                        </Button>
                        <Button onClick={() => {
                            navigate('/basket');
                            handleClose();
                        }} color="primary" variant="contained">
                            Перейти в корзину
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
};
