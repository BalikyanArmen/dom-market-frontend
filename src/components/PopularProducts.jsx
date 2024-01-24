import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CategoryCard from "./CategoryCard.jsx";
import categoryCard_1 from "../assets/Category1.png";
import categoryCard_2 from "../assets/Category2.png";
import categoryCard_3 from "../assets/Category3.png";
import categoryCard_4 from "../assets/Category4.png";
import categoryCard_5 from "../assets/Category5.png";
import categoryCard_6 from "../assets/Category6.png";

function PopularProducts() {
    return (
        <Container sx={{
            marginTop: 2,
            marginLeft: 0,
            width: "100%",
            height: "hug",
            padding: "60px 0",
            gap: "10px",
            background: "#F5F5F5",
            maxWidth:"unset !important"
        }}>
            <Typography variant="h4" align="left" gutterBottom>
                Популярные категории
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3} key={1}>
                    <CategoryCard
                        image={categoryCard_1}
                        alt={`Product ${1 + 1}`}
                        title={`Категория ${1 + 1}`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} key={2}>
                    <CategoryCard
                        image={categoryCard_2}
                        alt={`Product ${2 + 1}`}
                        title={`Категория ${2 + 1}`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} key={3}>
                    <CategoryCard
                        image={categoryCard_3}
                        alt={`Product ${3 + 1}`}
                        title={`Категория ${3 + 1}`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} key={4}>
                    <CategoryCard
                        image={categoryCard_4}
                        alt={`Product ${4 + 1}`}
                        title={`Категория ${4 + 1}`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} key={5}>
                    <CategoryCard
                        image={categoryCard_5}
                        alt={`Product ${5 + 1}`}
                        title={`Категория ${5 + 1}`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} key={6}>
                    <CategoryCard
                        image={categoryCard_6}
                        alt={`Product ${6 + 1}`}
                        title={`Категория ${6 + 1}`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} key={7}>
                    <CategoryCard
                        image={categoryCard_1}
                        alt={`Product ${7 + 1}`}
                        title={`Категория ${7 + 1}`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} key={8}>
                    <CategoryCard
                        image={categoryCard_3}
                        alt={`Product ${8 + 1}`}
                        title={`Категория ${8 + 1}`}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default PopularProducts;
