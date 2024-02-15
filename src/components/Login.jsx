import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Box, Checkbox, FormControlLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import {setLoggedIn} from "../toolkit/productSlice.js";

export default function LoginDialog({isDialogOpen = false, handleClose}) {
    const [isRegistrationOpen, setRegistrationOpen] = React.useState(false);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.product.isLoggedIn);

    const handleRegistrationOpen = () => {
        setRegistrationOpen(true);
    };

    const handleRegistrationClose = () => {
        setRegistrationOpen(false);
    };
    return (
        <React.Fragment>
            <Dialog
                open={isDialogOpen && !isRegistrationOpen}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());

                        const email = formJson.email;
                        const password = formJson.password;
                        console.log(formJson);
                        dispatch(setLoggedIn(true));
                        console.log(isLoggedIn)

                        handleClose();
                    },
                    sx: {
                        width: "594px",
                        height: "383px",
                    }
                }}
            >
                <DialogTitle sx={{
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontWeight: "500",
                    lineHeight: "22px",
                    letterSpacing: "0px",
                    textAlign: "left",

                }}>Войти</DialogTitle>
                <DialogContent>
                    <div className="mb-4">
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="email"
                            name="email"
                            label="Электронная почта"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="password"
                            name="password"
                            label="Пароль"
                            type="password"
                            fullWidth
                            variant="standard"
                        />
                    </div>
                </DialogContent>
                <DialogContent sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <FormControlLabel control={
                        <Checkbox autoFocus
                                  margin="dense"
                                  id="remember"
                                  name="remember"
                        />} label="Запомнить"
                                      labelPlacement={"end"}/>
                    <Button
                        variant="text"
                        color="primary"
                        size="small">
                        Забыли пароль?
                    </Button>
                </DialogContent>
                <DialogActions sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Button type="submit" fullWidth="90%" variant="contained" color="primary"
                            size="large">Войти</Button>
                    <Box sx={{display: "flex"}}>
                        <Typography style={{
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '13px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '22px'
                        }}>У вас нет учетной записи?</Typography>
                        <Button variant="text" size="small" color="primary" onClick={handleRegistrationOpen}>Создать
                            аккаунт </Button>
                    </Box>
                </DialogActions>
            </Dialog>
            <Dialog
                open={isRegistrationOpen && isDialogOpen}
                onClose={handleRegistrationClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        const password = formJson.password;
                        console.log(formJson);
                        handleClose();
                    },
                    sx: {
                        width: "594px",
                        height: "383px",
                    }
                }}
            >
                <DialogTitle sx={{
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontWeight: "500",
                    lineHeight: "22px",
                    letterSpacing: "0px",
                    textAlign: "left",

                }}>Создать аккаунт</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="name"
                                label="Имя"
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
                                id="lastname"
                                name="lastname"
                                label="Фамилия"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                    <div className="mb-4">
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="email"
                            name="email"
                            label="Электронная почта"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="password"
                            name="password"
                            label="Пароль"
                            type="password"
                            fullWidth
                            variant="standard"
                        />
                    </div>
                </DialogContent>
                <DialogActions sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Button type="submit" fullWidth="90%" variant="contained" color="primary"
                            size="large">Создать аккаунт </Button>
                    <Box sx={{display: "flex"}}>
                        <Typography style={{
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '13px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '22px'
                        }}>Уже есть аккаунт?</Typography>
                        <Button variant="text" size="small" color="primary"
                                onClick={handleRegistrationClose}>Войти</Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
