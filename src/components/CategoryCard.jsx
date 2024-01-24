import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function CategoryCard({ image, alt, title }) {
    return (
        <Paper
            sx={{
                border: '1px solid #e2e2e2',
                borderRadius: 1,
                padding: 2,
                textAlign: 'center',
                margin: '5px',
            }}
        >
            <img
                sx={{ width: '100%', height: 'auto', marginBottom: 2 }}
                src={image}
                alt={alt}
            />
            <Typography variant="body2" sx={{ fontSize: 14 }}>
                {title}
            </Typography>
        </Paper>
    );
}

export default CategoryCard;
