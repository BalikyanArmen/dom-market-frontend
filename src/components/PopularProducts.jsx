import React, {useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CategoryCard from "./CategoryCard.jsx";
import {useNavigate} from "react-router-dom";

const categoryImages = Array.from({length: 8}, (_, index) => `../assets/Category${index > 5 ? index : index + 1}.png`);

const PopularProducts = ({title}) => {
    const [categoryCards, setCategoryCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategoryCards = async () => {
            const cards = await Promise.all(categoryImages.map(async (image, index) => {
                const module = await import(image);
                return {
                    image: module.default,
                    alt: `Product ${index + 1}`,
                    title: `Категория ${index + 1}`,
                };
            }));
            setCategoryCards(cards);
        };

        fetchCategoryCards();
    }, []);

    return (
        <Container sx={{
            marginTop: 2,
            marginLeft: 0,
            width: "100%",
            height: "hug",
            padding: "60px 0",
            gap: "10px",
            background: "#F5F5F5",
            maxWidth: "unset !important"
        }}>
            <Typography variant="h4" align="left" gutterBottom>
                {title}
            </Typography>
            <Grid container spacing={2}>
                {categoryCards.map((category, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}
                          onClick={() => navigate(`category/?title=${category.title}`)}>
                        <CategoryCard {...category} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default PopularProducts;
