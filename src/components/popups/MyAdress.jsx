import * as React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Box,
    TextField,
    Button,
    Autocomplete,
    IconButton
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Grid";

export const MyAdress = ({isOpen, titleText, headingText, handleClose}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)
        handleClose();
    };

    return (
        <Box>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmit,
                    sx: {
                        width: "594px",
                        height: "auto",
                    }
                }}
            >
                <DialogTitle
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontFamily: "Roboto",
                        fontSize: "24px",
                        fontWeight: "500",
                        lineHeight: "22px",
                        letterSpacing: "0px",
                        textAlign: "left",
                    }}
                >
                    {titleText}
                    <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography>{headingText}</Typography>

                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Край/Область/Регион"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>

                    <div className="mb-4">
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="city"
                            name="city"
                            label="Город"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="adress"
                                name="adress"
                                label="Улица, фом, квартира"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="index"
                                name="index"
                                label="Индекс"
                                type="text"

                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                    <Button fullWidth type="submit" variant="contained" color="primary" sx={{mt: 2}}>
                        Сохранить
                    </Button>
                </DialogContent>
            </Dialog>
        </Box>
    );
};
