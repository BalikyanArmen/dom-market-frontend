import React from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";

export function RightInfo() {
    return (
        <Box sx={{ flexGrow: 1,width:536, height:331}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card sx={{ padding: "20px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    12 990 ₽
                                </Typography>
                                <Typography variant="body1">Доступен сейчас</Typography>
                            </Grid>
                            <Grid item xs={6}>
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
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Button variant="outlined">-</Button>
                                    <Typography variant="body1">1</Typography>
                                    <Button variant="outlined">+</Button>
                                    <Button variant="contained" sx={{ ml: 2 }}>
                                        В Корзину
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
