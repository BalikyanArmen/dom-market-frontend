import Typography from "@mui/material/Typography";
import {Box, IconButton} from "@mui/material";
import arrowLeft from "../assets/ArrowLeft.svg";
import ProductCard from "./ProductCard.jsx";
import arrowRight from "../assets/ArrowRight.svg";
import React, {useState} from "react";
import Container from "@mui/material/Container";
import {ImageCarousel} from "./ImageCarousel.jsx";

export const NewProducts = ({products, title}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftArrowClick = () => {
        const newIndex = Math.max(currentIndex - 6, 0);
        setCurrentIndex(newIndex);
    };

    const handleRightArrowClick = () => {
        const newIndex = Math.min(currentIndex + 6, products.length - 1);
        setCurrentIndex(newIndex);
    };

    const displayedProducts = products.slice(currentIndex, currentIndex + 6);

    // Disable left arrow if at the beginning
    const isLeftDisabled = currentIndex === 0;

    // Disable right arrow if at the end
    const isRightDisabled = currentIndex + 6 >= products.length;

    return (
        <Container sx={{marginTop: 2, marginLeft: 0, maxWidth: "unset !important"}}>
            <Typography variant="h4" align="left" gutterBottom>{title}</Typography>
            <ImageCarousel displayedProducts={displayedProducts} handleLeftArrowClick={handleLeftArrowClick}
                           handleRightArrowClick={handleRightArrowClick} isLeftDisabled={isLeftDisabled}
                           isRightDisabled={isRightDisabled} ChildComponent={ProductCard}/>
        </Container>
    )
};
