import React from "react";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";
import brand1 from "../assets/brand1.png";
import brand2 from "../../public/brand2.png";

const brandImages = [brand1, brand2, brand2, brand2, brand2, brand2];

export const PartnersPart = () => {
    return (
        <Container sx={{
            display: "flex",
            padding: 0,
            alignItems: "flex-start",
            gap: 2,
            margin: 20
        }}>
            {brandImages.map((brand, index) => (
                <IconButton
                    key={index}
                    aria-label={`brand ${index + 1}`}
                    size="large"
                >
                    <img src={brand} alt={`brand ${index + 1}`} />
                </IconButton>
            ))}
        </Container>
    );
};
