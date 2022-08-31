import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, TextField, Typography, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { admin, student, teacher } from "../../shared/consts";

export default function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const { signin, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (user?.AccountType === admin) {
                navigate('/admin');
            } else if (user?.AccountType === student) {
                navigate('/student')
            } else if (user?.AccountType === teacher) {
                navigate('/teacher');
            }
        }
    }, [navigate, user]);

    const handleLogin = async () => {
        if (Email && Password) {
            const userLogged = await signin(Email, Password);

            if (userLogged) {
                if (userLogged?.AccountType === admin) {
                    navigate('/admin');
                } else if (userLogged?.AccountType === student) {
                    navigate('/student')
                } else if (userLogged?.AccountType === teacher) {
                    navigate('/teacher');
                }
            } else {
                alert('No user authenticated!');
            }
        }
    }

    return (
        <Box marginTop={5}>
            <Typography variant="h3" align="center" gutterBottom>Sign In</Typography>
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

                                <Typography variant="caption" marginLeft={13}>
                                    <Link to={'/forgotPassword'} style={{ textDecoration: 'none', color: '#000000' }}>
                                        <Typography variant="caption" sx={{ textDecoration: 'underline' }}>
                                            Forgot your password?
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
