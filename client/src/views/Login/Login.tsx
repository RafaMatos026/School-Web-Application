import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, TextField, Typography, Button } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthContext";

export default function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (Email && Password) {
            const isLogged = await auth.signin(Email, Password);
            console.debug(isLogged);
            if (isLogged) {
                navigate('/admin');
            }
        }
    }

    return (
        <Box marginTop={5}>
            <Typography variant="h3" align="center" gutterBottom>Sing In</Typography>
            <Card sx={{ maxWidth: 450, margin: '0 auto' }} variant='outlined'>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography>Email</Typography>
                                <TextField type={'email'} value={Email} onChange={(e) => setEmail(e.target.value)} fullWidth />
                            </Grid>
                            <Grid xs={12} item>
                                <Typography>Password</Typography>
                                <TextField type={'password'} value={Password} onChange={(e) => setPassword(e.target.value)} fullWidth />
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    Don't have an account?&nbsp;
                                    <Link to={'/register'} style={{ textDecoration: 'none', color: '#000000' }}>
                                        <Typography variant="caption" sx={{ textDecoration: 'underline' }}>
                                            Sign Up
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid xs={12} item textAlign={'center'}>
                                <Button variant="contained" onClick={handleLogin}>Login</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Box>
    )
}
