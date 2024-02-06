import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export const CategoryPageLinks = ({ selectedCategories }) => {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="#">
                    Главная
                </Link>
                {selectedCategories.map((category, index) => (
                    <Typography key={index} color="text.primary">{category}</Typography>
                ))}
            </Breadcrumbs>
        </div>
    );
}
