import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from "../../shared/consts";

export default function ForgotPassword() {
    const [Email, setEmail] = useState("");
    const navigate = useNavigate();
    return (
        <Box marginTop={5}>
            <Typography variant="h3" align="center" gutterBottom>Forgot Password</Typography>
            <Card sx={{ maxWidth: 450, margin: '0 auto' }} variant='outlined'>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography>Email</Typography>
                                <TextField type={'email'} value={Email} onChange={(e) => setEmail(e.target.value)} fullWidth />
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    Already have an account?&nbsp;
                                    <Link to={'/login'} style={{ textDecoration: 'none', color: '#000000' }}>
                                        <Typography variant="caption" sx={{ textDecoration: 'underline' }}>
                                            Sign In
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid xs={12} item textAlign={'center'}>
                                <Button variant="contained" onClick={() => ResendNewPassword()}>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Box>
    )

    function ResendNewPassword() {
        let url = BASE_URL + '/users/forgotPassword';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                Email: Email,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('A new password has been sent to your email!');
                } else {
                    alert('We were unable to send you a new password. Please try again later!');
                }
                return response.json();
            })
            .then((data) => {
                navigate('/login');
            })
            .catch((error) => {
                console.log('Error: ' + error.message);
            })
    }
}