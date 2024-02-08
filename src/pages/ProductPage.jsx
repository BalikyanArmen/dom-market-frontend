import React from 'react';
import {useSelector} from 'react-redux';
import {CategoryPageLinks} from "../components/CategoryPageLinks.jsx";
import {
    Accordion,
    AccordionSummary,
    Box,
    IconButton,
    Rating,
    Divider,
    AccordionDetails,
} from "@mui/material";
import {Typography} from "antd";
import {RightInfo} from "../components/product_page_comp/ProductRightInfo.jsx";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import {NewProducts} from "../components/NewProducts.jsx";
import TextField from "@mui/material/TextField";
import {reviews, similarProducts, technicalFeatures, userQuestions} from "../core/constants.js";
import {ImageComp} from "../components/product_page_comp/Image_C.jsx";
import {UserQuestionItem} from "../components/product_page_comp/UserQuestionItem.jsx";
import {RateItem} from "../components/product_page_comp/Rate_Item.jsx";
import {InfoItem} from "../components/product_page_comp/InfoItem.jsx";
import {ReviewCard} from "../components/product_page_comp/ReviewCard.jsx";
import {ButtonWrapper} from "../components/product_page_comp/ButtonWrapper.jsx";
import {TextFieldWrapper} from "../components/product_page_comp/TextFieldWrapper.jsx";


export const ProductPage = () => {
    const chosenProduct = useSelector((state) => state.product.chosenProduct);
    const selectedCategories = useSelector((state) => state.product.selectedCategories);

    const products = new Array(8).fill(chosenProduct)
    return (
        <div>
            {chosenProduct ? (
                <div>
                    <CategoryPageLinks selectedCategories={selectedCategories}/>
                    <Box sx={{padding: "15px", display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{display: "flex"}}>
                            <NewProducts products={products} cardsInRow={2} component={ImageComp}
                                         sx={{display: "flex", flexDirection: "column"}}/>
                        </Box>
                        <Box>
                            <div><h1>{chosenProduct.title}</h1></div>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 12,
                                    alignSelf: "stretch",
                                    boxSizing: "border-box",
                                    flexShrink: 0,
                                }}
                            >
                                <Box>
                                    <Box>
                                        4.5
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly/>
                                    </Box>
                                </Box>
                                <Typography>
                                    98 оценок
                                </Typography>
                                <Box>
                                    <Typography
                                        sx={{
                                            color: "rgba(0, 0, 0, 0.7)",
                                            fontSize: 12,
                                            fontFamily: "Roboto, sans-serif",
                                            fontWeight: "initial",
                                            textAlign: "left",
                                        }}
                                    >
                                        Артикул: 5062891
                                    </Typography>
                                </Box>
                            </Box>
                            <img alt={'product'} src={chosenProduct.productImage} width={528} height={528}/>
                        </Box>
                        <Box>
                            <RightInfo/>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" sx={{fontWeight: 'bold'}}>Информация</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1">
                                        Све
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box display="flex" flexDirection="column" alignItems="flex-start">
                                        <InfoItem label="Максимальное давление:" value="30 бар"/>
                                        <InfoItem label="Материал:" value="ПВХ"/>
                                        <InfoItem label="Допустимый диапазон температур:" value="от -10 до +60 °С"/>
                                        <InfoItem label="Минимальная температура эксплуатации:" value="-10 °С"/>
                                        <InfoItem label="Длина:" value="50м"
                                                  imageSrc1="grida://assets-reservation/images/82:23348"/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={4}
                          sx={{padding: '0px 60px'}}>
                        <Typography variant="h6" style={{fontWeight: "bold"}}>О товаре</Typography>
                        <Grid item container direction="row" spacing={2}>
                            <Typography variant="body1">
                                Пришла пора менять полы? Обратите внимание на ламинат KRONOSTAR Galaxy Дуб Цефей.
                                Покрытие используется для помещений с интенсивной эксплуатацией пола, применяется для
                                отделки квартир, офисов, гостиниц и других общественных и жилых зданий.
                                Поверхность имитирует структуру дуба с характерными прожилками, сучками и трещинами.
                                Светло-коричневый оттенок идеально впишется в любое помещение, древесная фактура станет
                                дополнительным элементом стилей лофт, кантри, модерн.
                            </Typography>
                        </Grid>
                        <Grid item container direction="column" spacing={2}>
                            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>Технические особенности</Typography>
                            {technicalFeatures.map((feature, index) => (
                                <Grid key={index} item container direction="row" alignItems="center" spacing={1}>
                                    <Typography variant="body1">{feature.label}</Typography>
                                    <img src={feature.imageUrl} alt="image of Lier" />
                                    <Typography variant="body1">{feature.value}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item container direction="column" spacing={2}>
                            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>Общие характеристики</Typography>
                            {technicalFeatures.map((characteristic, index) => (
                                <Grid key={index} item container direction="row" alignItems="center" spacing={1}>
                                    <Typography variant="body1">{characteristic.label}</Typography>
                                    <img src={characteristic.imageUrl} alt="image of Lier" />
                                    <Typography variant="body1">{characteristic.value}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}
                          sx={{padding: '15px', marginTop: "10px"}}>
                        <Accordion sx={{width: "96%"}}>
                            <AccordionSummary expandIcon={<IconButton sx={{width: 40, height: 40}}><img
                                src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e4eccf1-68fc-408c-8452-6a326fd0deaa"}
                                alt="icon"/></IconButton>}>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1">{"Подробнее"}</Typography>
                                    <Typography variant="body2">20</Typography>
                                </Grid>
                            </AccordionSummary>
                            <Divider/>
                        </Accordion>
                        <Accordion sx={{width: "96%"}}>
                            <AccordionSummary expandIcon={<IconButton sx={{width: 40, height: 40}}><img
                                src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e4eccf1-68fc-408c-8452-6a326fd0deaa"}
                                alt="icon"/></IconButton>}>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1">{"Отзывы"}</Typography>
                                    <Typography variant="body2">20</Typography>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    flexDirection="row"
                                    alignItems="center"
                                    gap={4}
                                    borderRadius={4}
                                    alignSelf="stretch"
                                    bgcolor="rgb(245, 245, 245)"
                                    p={4}
                                >
                                    <Box display="flex" justifyContent="center" flexDirection="column"
                                         alignItems="center" flex={1} gap={2} width={550}>
                                        <Box display="flex" justifyContent="flex-start" flexDirection="column"
                                             alignItems="center" gap={1}>
                                            <Typography variant="h4" color="textPrimary">4.5</Typography>
                                            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                                                {[...Array(4)].map((_, index) => (
                                                    <StarIcon key={index} sx={{color: 'rgb(255, 180, 0)'}}/>
                                                ))}
                                                <StarIcon sx={{color: 'rgba(0, 0, 0, 0.23)'}}/>
                                            </Box>
                                            <Typography variant="body1" color="textPrimary">98 оценок</Typography>
                                        </Box>
                                        <Button variant="outlined" color="primary">
                                            <Typography variant="subtitle1">Смотреть все</Typography>
                                        </Button>
                                    </Box>
                                    <Divider orientation="vertical" flexItem/>
                                    <Grid container justifyContent="space-between" alignItems="center"
                                          flexDirection="column" flex={1} width={550}>
                                        <RateItem/>
                                        <RateItem/>
                                        <RateItem/>
                                        <RateItem/>
                                    </Grid>
                                </Box>
                                <Box sx={{margin: "35px 0px", display: "flex", justifyContent: "center"}}>
                                    <NewProducts products={products} cardsInRow={4} component={ImageComp}
                                                 moreStyles={{justifyContent: "center", display: "flex"}}/>
                                </Box>

                                <Box
                                    sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: "16px"}}>
                                    <NewProducts products={reviews} component={ReviewCard} cardsInRow={4}
                                                 moreStyles={{justifyContent: "center", display: "flex"}}/>
                                </Box>

                            </AccordionDetails>
                            <Divider/>
                        </Accordion>
                        <Accordion sx={{width: "96%"}}>
                            <AccordionSummary expandIcon={<IconButton sx={{width: 40, height: 40}}><img
                                src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e4eccf1-68fc-408c-8452-6a326fd0deaa"}
                                alt="icon"/></IconButton>}>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1">{"Вопросы и Ответы"}</Typography>
                                    <Typography variant="body2">20</Typography>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box display="flex"
                                     justifyContent="flexStart"
                                     flexDirection="row"
                                     alignItems="center"
                                     gap={4}
                                     borderRadius={4}
                                     alignSelf="stretch"
                                     bgcolor="rgb(245, 245, 245)"
                                     p={4}>
                                    <Grid item>
                                        <ButtonWrapper>
                                            <Button variant="outlined" color="primary">
                                                <Typography variant="subtitle1">
                                                    Смотреть все
                                                </Typography>
                                            </Button>
                                        </ButtonWrapper>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{
                                            width: 1,
                                            background: "linear-gradient(-90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
                                            borderRadius: 2,
                                            alignSelf: "stretch",
                                            flexShrink: 0
                                        }}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <Typography variant="h6">
                                                Задайте вопрос о товаре
                                            </Typography>
                                            <Typography variant="body1">
                                                Вам ответит работник Сервис Поддержки или пользователь, купивший этот
                                                товар.
                                            </Typography>
                                            <TextFieldWrapper>
                                                <TextField id="outlined-basic" label="Напишите вопрос"
                                                           variant="outlined" fullWidth/>
                                            </TextFieldWrapper>
                                        </Box>
                                    </Grid>
                                </Box>
                                <Box sx={{margin: "35px 0px", display: "flex", justifyContent: "center"}}>
                                    <NewProducts products={userQuestions} component={UserQuestionItem} cardsInRow={5}
                                                 moreStyles={{justifyContent: "center", display: "flex"}}/>
                                </Box>
                            </AccordionDetails>
                            <Divider/>
                        </Accordion>
                    </Grid>
                    <NewProducts title={"Похожие товары"} products={similarProducts} cardsInRow={4}/>
                </div>
            ) : (
                <p>No product selected</p>
            )}
        </div>
    );
};






