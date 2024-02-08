import {Avatar, Box, Card, CardContent, CardHeader} from "@mui/material";
import {Typography} from "antd";
import StarIcon from "@mui/icons-material/Star.js";
import React from "react";

export const ReviewCard = ({reviewer, subtitle, comment}) => {
    return (
        <Card style={{width: 388}}>
            <CardHeader
                avatar={<Avatar>U</Avatar>}
                title={
                    <>
                        <Typography variant="subtitle1" style={{fontWeight: "bold"}}>{reviewer}</Typography>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                            {[...Array(4)].map((_, index) => (
                                <StarIcon key={index} sx={{color: 'rgb(255, 180, 0)'}}/>
                            ))}
                            <StarIcon sx={{color: 'rgba(0, 0, 0, 0.23)'}}/>
                        </Box>
                    </>
                }
                subheader="5 дней назад"
            />
            <CardContent>
                <Typography variant="h6">{subtitle}</Typography>
                <Typography>
                    {comment}
                </Typography>
            </CardContent>
        </Card>
    )
}
