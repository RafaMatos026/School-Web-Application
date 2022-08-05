import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Card, CardContent, TextField, Typography, Button } from "@mui/material";

export default function Login() {
    return (
        <Box marginTop={5}>
            <Typography variant="h3" align="center" gutterBottom>Sing In</Typography>
            <Card sx={{ maxWidth: 450, margin: '0 auto' }} variant='outlined'>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography>Email</Typography>
                                <TextField type={'email'} fullWidth />
                            </Grid>
                            <Grid xs={12} item>
                                <Typography>Password</Typography>
                                <TextField type={'password'} fullWidth />
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
                                <Button variant="contained">Login</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Box>
    )
}
