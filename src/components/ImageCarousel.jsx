import {Box, IconButton} from "@mui/material";
import arrowLeft from "../assets/ArrowLeft.svg";
import arrowRight from "../assets/ArrowRight.svg";
import React from "react";

export const ImageCarousel = ({
                                  handleLeftArrowClick,
                                  isLeftDisabled,
                                  displayedProducts,
                                  handleRightArrowClick,
                                  isRightDisabled,
                                  ChildComponent,
                                  sx
                              }) => {
    return (
        <Box sx={sx?sx:{
            display: "flex",
            alignItems: "center", // Optional: Align items in the center
        }}>
            <IconButton
                aria-label="delete"
                size="large"
                onClick={handleLeftArrowClick}
                disabled={isLeftDisabled}
            >
                <img src={`${arrowLeft}`} alt="alt"/>
            </IconButton>
            {displayedProducts.map((product, index) => {
                console.log(product)
                return (
                    // Wrap ChildComponent in JSX tags
                    <React.Fragment key={index}>
                        <ChildComponent {...product} />
                    </React.Fragment>
                )
            })}
            <IconButton
                aria-label="delete"
                size="large"
                onClick={handleRightArrowClick}
                disabled={isRightDisabled}
            >
                <img src={`${arrowRight}`} alt="alt"/>
            </IconButton>
        </Box>
    )
}