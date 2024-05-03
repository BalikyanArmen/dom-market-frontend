import {Box, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack.js";
import React from "react";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export const OrderPlacement = ()=>{
    const navigate = useNavigate();
    function goBack() {
        navigate(-1); // Go back one step in history
    }
    return(
        <Box sx={{padding: "60px 30px",display:"flex",flexDirection:"column"}}>
            <Box sx={{display: "flex"}}>
                <IconButton onClick={() => {
                    console.log("dasd")
                }}>
                    <ArrowBackIcon onClick={goBack}/>
                </IconButton>
                <Typography sx={{marginLeft:"4px"}} variant="h6">Оформление</Typography>
            </Box>
            <Box sx={{display:"flex"}}>
                <Box display="flex" flexDirection="column" alignItems="flex-end" gap={2}>
                    <ShippingSettings>
                        <Typography variant="h6">Способ доставки</Typography>
                        <Box display="flex" gap={2}>
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
                        </Box>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <TextField label="Край/Область/Регион" />
                            <TextField label="Город" />
                            <Box display="flex" gap={2}>
                                <TextField label="Улица, дом, квартира" />
                                <TextField label="Индекс" />
                            </Box>
                        </Box>
                    </ShippingSettings>
                    <ShippingSettings>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6">Получатель</Typography>
                            <Box display="flex" flexDirection="column" gap={2}>
                                <Box display="flex" gap={2}>
                                    <TextField label="Имя, Фамилия" />
                                    <TextField label="Телефон" />
                                </Box>
                                <TextField label="Электронная почта" />
                            </Box>
                        </Box>
                    </ShippingSettings>

                    <ShippingSettings>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6">Способ оплаты</Typography>
                            <Box display="flex" flexDirection="column" gap={2}>
                                <TextField label="Номер карты" />
                                <TextField label="Имя фамилия владельца" />
                                <Box display="flex" gap={2}>
                                    <TextField label="Дата окончания срока" />
                                    <TextField label="CVC / CVC2" />
                                </Box>
                            </Box>
                        </Box>
                    </ShippingSettings>
                </Box>
            </Box>
        </Box>
    )
}
const ShippingSettings = (props) => (
    <Box
        {...props}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={2}
        border="1px solid rgba(0, 0, 0, 0.06)"
        borderRadius="8px"
        alignSelf="stretch"
        bgcolor="#79747e0a"
        p={2}
    />
);
const ShippingType = (onClick, isClicked)=>{
    return(
        <Card variant="outlined" onClick={onClick} bgcolor={isClicked ? "#007bff" : "#79747e0a"}/>
    )
}