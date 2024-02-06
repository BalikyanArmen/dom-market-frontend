import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {CategoryPageLinks} from "../components/CategoryPageLinks.jsx";
import {Box, Rating} from "@mui/material";
import {ImageCarousel} from "../components/ImageCarousel.jsx";
import { Typography} from "antd";
import {RightInfo} from "../components/productPage_comp/ProductRightInfo.jsx";
import Grid from "@mui/material/Grid";

const ImageComp = ({productImage}) => {
    console.log(productImage)
    return (
        <img alt={'img'} src={productImage}/>
    )
}
export const ProductPage = () => {
    const chosenProduct = useSelector((state) => state.product.chosenProduct);
    const selectedCategories = useSelector((state) => state.product.selectedCategories);
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [chosenProduct, chosenProduct, chosenProduct, chosenProduct]
    const handleLeftArrowClick = () => {
        const newIndex = Math.max(currentIndex - 2, 0);
        setCurrentIndex(newIndex);
    };
    console.log(chosenProduct)
    const handleRightArrowClick = () => {
        const newIndex = Math.min(currentIndex + 6, products.length - 1);
        setCurrentIndex(newIndex);
    };

    const displayedProducts = products.slice(currentIndex, currentIndex + 2);

    // Disable left arrow if at the beginning
    const isLeftDisabled = currentIndex === 0;

    // Disable right arrow if at the end
    const isRightDisabled = currentIndex + 6 >= products.length;
    console.log(chosenProduct)
    return (
        <div>
            {chosenProduct ? (
                <div>
                    <CategoryPageLinks selectedCategories={selectedCategories}/>
                    <Box sx={{padding: "15px", display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{display: "flex"}}>
                            <ImageCarousel handleRightArrowClick={handleRightArrowClick}
                                           isRightDisabled={isRightDisabled}
                                           isLeftDisabled={isLeftDisabled} handleLeftArrowClick={handleLeftArrowClick}
                                           displayedProducts={displayedProducts} ChildComponent={ImageComp}
                            />
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
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly/>
                                    </Box>
                                    <Typography>
                                        4.5
                                    </Typography>
                                </Box>
                                <Typography>
                                    98 оценок
                                </Typography>
                                <Box></Box>
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
                                        Артикул:
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "black",
                                            fontSize: 12,
                                            fontFamily: "Roboto, sans-serif",
                                            fontWeight: "initial",
                                            textAlign: "left",
                                        }}
                                    >
                                        5062891
                                    </Typography>
                                </Box>
                            </Box>
                            <img alt={'product'} src={chosenProduct.productImage} width={528} height={528}/>
                        </Box>
                        <Box>
                            <RightInfo/>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Информация</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1">
                                        Светло-коричневый оттенок идеально впишется в любое помещение,
                                        древесная фактура станет дополнительным элементом стилей лофт, кантри,
                                        модерн.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box display="flex" flexDirection="column" alignItems="flex-start">
                                        <InfoItem label="Максимальное давление:" value="30 бар"  />
                                        <InfoItem label="Материал:" value="ПВХ" />
                                        <InfoItem label="Допустимый диапазон температур:" value="от -10 до +60 °С"  />
                                        <InfoItem label="Минимальная температура эксплуатации:" value="-10 °С" />
                                        <InfoItem label="Длина:" value="50м" imageSrc1="grida://assets-reservation/images/82:23348"  />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </div>
            ) : (
                <p>No product selected</p>
            )}
        </div>
    );
};
const InfoItem = ({ label, value, imageSrc, imageSrc1, imageSrc2 }) => (
    <Box display="flex" alignItems="center" mb={1}>
        <Typography variant="body1">{label}</Typography>

        <Typography variant="body1">{value}</Typography>
    </Box>
);
