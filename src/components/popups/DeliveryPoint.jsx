import * as React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Box, TextField, Button, Autocomplete, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const DeliveryPoint = ({ isOpen, titleText, headingText, handleClose }) => {
    const [selectedCity, setSelectedCity] = React.useState("");
    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    const handleCityChange = (event, value) => {
        setSelectedCity(value);
    };

    const handleSearchChange = (event, value) => {
        setSearchQuery(value);
    };

    const handleSubmit = () => {
        console.log("Selected city:", selectedCity);
        handleClose();
    };

    // Mock search logic - filtering based on search query
    React.useEffect(() => {
        // Simulating API call or data fetching
        // Replace this with actual search logic
        const mockData = [
            "Московская область, Красногорск, Павшинская улица, 2",
            "г. Москва, м. Бибирево, ул. Пришвина, 3Г",
            "Московская область, Красногорск, Павшинская улица, 4",
            "г. Москва, м. Алтуфьево, ул. Вербная, 5",
        ];
        const filteredResults = mockData.filter((item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredResults);
    }, [searchQuery]);

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
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography>{headingText}</Typography>
                    <Autocomplete
                        value={selectedCity}
                        onChange={handleCityChange}
                        options={searchResults}
                        renderInput={(params) => <TextField {...params} label="Выберите город" variant="outlined" />}
                        inputValue={searchQuery}
                        onInputChange={handleSearchChange}
                        fullWidth
                        sx={{ mt: 2 }}
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Выбрать
                    </Button>
                </DialogContent>
            </Dialog>
        </Box>
    );
};
