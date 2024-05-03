import {
    Box,
    Button, Card,
    Card as MaterialUICard,
    CardActions,
    CardContent,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {BasketCard} from "../components/BasketCard.jsx";
import {handleDeleteBasketProduct, setBasketProducts} from "../toolkit/productSlice.js";
import RemoveIcon from "@mui/icons-material/Remove.js";
import AddIcon from "@mui/icons-material/Add.js";
import DeleteIcon from "@mui/icons-material/Delete.js";

export const BasketPage = () => {
    const basketProducts = useSelector(state => state.product.basketProducts);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const totalSum = basketProducts.reduce((acc, curr) => acc + curr.price, 0);

    function goBack() {
        navigate(-1); // Go back one step in history
    }
    const handleDelete = (productId) => {
        dispatch(handleDeleteBasketProduct({
            data: {
                basketProducts: basketProducts,
                productId
            }
        }))
    };

    const clearBasket = ()=>{
        dispatch(setBasketProducts([]));
    }
    console.log(basketProducts.length)
    return (
        <Box sx={{padding: "60px 30px",display:"flex",flexDirection:"column"}}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, width: "60%"}}>
                <Box sx={{display: "flex"}}>
                    <IconButton onClick={() => {
                        console.log("dasd")
                    }}>
                        <ArrowBackIcon onClick={goBack}/>
                    </IconButton>
                    <Typography sx={{marginLeft:"4px"}} variant="h6">Кoрзина<sup>{basketProducts.length}</sup></Typography>
                </Box>
                <Button variant="text" onClick={clearBasket}>Очистить</Button>
            </Box>
            <Box sx={{display:"flex" }}>
                <Box sx={{width:"60%"}}>
                    {basketProducts.map((product) => (
                        <BasketCard key={product.id} name={product.name} price={product.price}
                                    onDelete={() => handleDelete(product.id)} count={product.count}/>
                    ))}
                </Box>
                <MaterialUICard variant="outlined" sx={{marginLeft:"40px",width:"20%",height:"fit-content"}}>
                    <CardContent>
                        <Typography variant="body1">Способы доставки</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card variant="outlined">
                                    <Box sx={{ p: 2 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={2}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        height: "100%",
                                                    }}
                                                >
                                                    <img
                                                        src="https://img.icons8.com/material-sharp/24/000000/shop.png"
                                                        alt="shop"
                                                    />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Typography variant="body2">
                                                    Самовывоз из пункта выдачи
                                                </Typography>
                                                <Typography variant="caption">
                                                    3-4 дня
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card variant="outlined">
                                    <Box sx={{ p: 2 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={2}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        height: "100%",
                                                    }}
                                                >
                                                    <img
                                                        src="https://img.icons8.com/material-sharp/24/000000/delivery.png"
                                                        alt="delivery"
                                                    />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Typography variant="body2">
                                                    На мой адрес
                                                </Typography>
                                                <Typography variant="caption">
                                                    Добавить адрес
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Card>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography variant="caption">
                                    Московская область, Красногорск, Павшинская улица, 2
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography variant="h6">Товары<sup>{basketProducts.length}</sup></Typography>
                                <Typography variant="h6">{totalSum} ₽</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography variant="h6">Доставка</Typography>
                                <Typography variant="h6">990 ₽</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <hr/>
                    <CardActions>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography variant="h6">Итого</Typography>
                                <Typography variant="h6">{totalSum + 990} ₽</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Button variant="contained" size="large" onClick={()=>navigate('/orderplacement')}>Перейти к оформлению</Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </MaterialUICard>
            </Box>
        </Box>
    )
}