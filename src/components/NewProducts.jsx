import Typography from "@mui/material/Typography";
import ProductCard from "./ProductCard.jsx";
import React, {useState} from "react";
import Container from "@mui/material/Container";
import {ImageCarousel} from "./ImageCarousel.jsx";

export const NewProducts = ({products, title, component, cardsInRow = 6,moreStyles = {},sx}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftArrowClick = () => {
        const newIndex = Math.max(currentIndex - cardsInRow, 0);
        setCurrentIndex(newIndex);
    };

    const handleRightArrowClick = () => {
        const newIndex = Math.min(currentIndex + cardsInRow, products.length - 1);
        setCurrentIndex(newIndex);
    };

    const displayedProducts = products.slice(currentIndex, currentIndex + cardsInRow);

    // Disable left arrow if at the beginning
    const isLeftDisabled = currentIndex === 0;

    // Disable right arrow if at the end
    const isRightDisabled = currentIndex + cardsInRow >= products.length;

    return (
        <Container
            sx={{marginTop: 2, marginLeft: 0, maxWidth: "unset !important",...moreStyles}}>
            {title ? <Typography variant="h4" align="left" gutterBottom>{title}</Typography> : null}
            <ImageCarousel displayedProducts={displayedProducts} handleLeftArrowClick={handleLeftArrowClick}
                           handleRightArrowClick={handleRightArrowClick} isLeftDisabled={isLeftDisabled}
                           isRightDisabled={isRightDisabled} ChildComponent={component ? component : ProductCard} sx={sx}/>
        </Container>
    )
};
