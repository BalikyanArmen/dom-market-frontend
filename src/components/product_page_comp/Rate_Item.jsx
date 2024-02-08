import Grid from "@mui/material/Grid";
import {Box, LinearProgress} from "@mui/material";
import StarIcon from "@mui/icons-material/Star.js";
import {Typography} from "antd";
import React from "react";

export function RateItem() {
    return (
        <Grid item container justifyContent="flex-start" alignItems="center" gap={2}>
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                {[...Array(4)].map((_, index) => (
                    <StarIcon key={index} sx={{color: 'rgb(255, 180, 0)'}}/>
                ))}
                <StarIcon sx={{color: 'rgba(0, 0, 0, 0.23)'}}/>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
                <LinearProgress variant="determinate" value={70} sx={{width: 200}}/>
                <Typography variant="body2">70</Typography>
            </Box>
        </Grid>
    );
}
