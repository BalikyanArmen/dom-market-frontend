import React, {useState} from "react";
import {Box, IconButton} from "@mui/material";
import CategoryCard from "../components/ProductCard.jsx";
import arrowLeft from "../assets/ArrowLeft.svg";
import arrowRight from "../assets/ArrowRight.svg";
import Typography from "@mui/material/Typography";
import {NewProducts} from "../components/NewProducts.jsx";
import PopularProducts from "../components/PopularProducts.jsx";

export default function Home() {
    const products = new Array(33).fill({
        title: "Решетка-гриль FORESTER",
        description: "Решетка для рыбы. Решетка - гриль FORESTER 240х440мм",
        price: "560₽",
        rating: 4.5,
        reviews: "45 отзывов",
        image: "https://placehold.co/200x200.png?text=Product+Image",
    });

    const categories = [
        // ... your category data
    ];

    const brands = ["Makita", "ПАТРИОТ", "metabo", "DEWALT", "STIHL", "BOSCH"];


    return (
        <Box sx={{
            padding:"15px"
        }}>
            <NewProducts products={products}/>
            <PopularProducts/>
        </Box>
    );
}
