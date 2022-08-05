import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardContent, Card } from "@mui/material";
import React from "react";



export default function Register() {

    return (
        <Box marginTop={5}>
            <Typography variant="h3" align="center" gutterBottom>Sing Up</Typography>
            <Card sx={{ maxWidth: 450, margin: '0 auto' }} variant='outlined'>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography>First Name</Typography>
                                <TextField type={'text'} fullWidth />
                            </Grid>
                            <Grid xs={12} item>
                                <Typography>Last Name</Typography>
                                <TextField type={'text'} fullWidth />
                            </Grid>
                            <Grid xs={12} item>
                                <Typography>Email</Typography>
                                <TextField type={'email'} fullWidth />
                            </Grid>
                            <Grid xs={12} item>
                                <Typography>Password</Typography>
                                <TextField type={'password'} fullWidth />
                            </Grid>
                            <Grid xs={12} item>
                                <Typography>Birthday</Typography>
                                <TextField type={'date'} fullWidth />
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    Already have an account?&nbsp;
                                    <Link to={'/login'} style={{textDecoration: 'none', color: '#000000'}}>
                                        <Typography variant="caption" sx={{ textDecoration: 'underline' }}>
                                            Sign In
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid xs={12} item textAlign={'center'}>
                                <Button variant="contained">Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Box>
    )
}