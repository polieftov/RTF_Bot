import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from "react";
import {useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import {DialogTree} from "./dialogTreeComponent/DialogTree";

export function Authorization() {

    const navigate = useNavigate();

    function signInClick() {
        navigate("/main");
    }

    return (
        // <Box>
        //     <Container component="main" maxWidth="xs">
        //         <CssBaseline/>
        //         <Box
        //             sx={{
        //                 marginTop: 8,
        //                 display: 'flex',
        //                 flexDirection: 'column',
        //                 alignItems: 'center',
        //             }}
        //         >
        //             <Typography component="h1" variant="h5">
        //                 Вход
        //             </Typography>
        //             <Box component="form" noValidate sx={{mt: 1, boxShadow: 1, p: 3, borderRadius: '16px'}}>
        //                 <TextField
        //                     margin="normal"
        //                     required
        //                     fullWidth
        //                     id="login"
        //                     label="Логин"
        //                     name="login"
        //                     autoComplete="username"
        //                     autoFocus
        //                 />
        //                 <TextField
        //                     margin="normal"
        //                     required
        //                     fullWidth
        //                     name="password"
        //                     label="Пароль"
        //                     type="password"
        //                     id="password"
        //                     autoComplete="current-password"
        //                 />
        //                 <Button
        //                     type="submit"
        //                     fullWidth
        //                     variant="contained"
        //                     sx={{mt: 3, mb: 2}}
        //                     onClick={signInClick}
        //                 >
        //                     Войти
        //                 </Button>
        //                 <Typography align="center">
        //                     <Link href="/registration">
        //                         Зарегестрироваться
        //                     </Link>
        //                 </Typography>
        //             </Box>
        //         </Box>
        //     </Container>
        // </Box>
        <DialogTree/>
    )
}
