import {Box} from "@mui/material";
import {Typography} from "antd";
import React from "react";

export const InfoItem = ({label, value}) => (
    <Box display="flex" alignItems="center" mb={1}>
        <Typography variant="body1">{label}</Typography>

        <Typography variant="body1">{value}</Typography>
    </Box>
);
