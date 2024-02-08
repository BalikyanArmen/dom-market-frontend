import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React from "react";
import {Avatar, Box, SvgIcon} from "@mui/material";
import {Typography} from "antd";
import ChatIcon from "@mui/icons-material/Chat.js";

export function UserQuestionItem({username, timestamp, question, supportResponse}) {
    return (
        <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{
                p: 2,
                bgcolor: 'background.default',
                borderRadius: 1,
                width: '100%',
                maxWidth: 300,
                margin: 'auto'
            }}>
                <UserReviewItem
                    username={username}
                    timestamp={timestamp}
                    question={question}
                    supportResponse={supportResponse}
                />
            </Paper>
        </Grid>
    );
}
function UserReviewItem({username, timestamp, question, supportResponse}) {
    return (
        <Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                <Avatar sx={{width: 32, height: 32}}>U</Avatar>
                <Typography variant="body1">{username}</Typography>
                <SvgIcon component={ChatIcon} sx={{fontSize: 16}}/>
                <Typography variant="body2">{timestamp}</Typography>
            </Box>
            <Box sx={{mt: 1}}>
                <Typography variant="body1" sx={{fontWeight: 'bold'}}>{question}</Typography>
            </Box>
            <Box sx={{mt: 1}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                    <Avatar sx={{width: 32, height: 32}}>S</Avatar>
                    <Typography variant="body1">Сервис Поддержки</Typography>
                </Box>
                <Typography variant="body2" sx={{ml: 3}}>{supportResponse}</Typography>
            </Box>
        </Box>
    );
}


