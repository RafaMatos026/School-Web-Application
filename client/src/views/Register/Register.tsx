import { Grid, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import React from "react";


export default function Register() {

    return (
        <div>
            <form>
                <Grid
                    container
                    alignItems={'center'}
                    justifyContent='center'
                    display={'flex'}
                    flexDirection='column'
                    marginTop={3}
                    rowSpacing={3}>

                    <Grid item>
                        <Typography textAlign={'start'}>First Name</Typography>
                        <TextField size="small" type={'text'} variant="outlined" />
                    </Grid>

                    <Grid item>
                        <Typography textAlign={'start'}>Last Name</Typography>
                        <TextField size="small" type={'text'} variant="outlined" />
                    </Grid>

                    <Grid item>
                        <Typography textAlign={'start'}>Email</Typography>
                        <TextField size="small" type={'email'} variant="outlined" />
                    </Grid>

                    <Grid item>
                        <Typography textAlign={'start'}>Password</Typography>
                        <TextField size="small" type={'password'} variant="outlined" />
                    </Grid>

                    <Grid item>
                        <Typography textAlign={'start'}>Birthday</Typography>
                        <TextField size="small" type={'text'} variant="outlined" />
                        <Typography
                            variant='caption'
                            display={'block'}>
                            Already registered? <Typography variant='caption' sx={{ textDecoration: 'underline' }}>Sign In</Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </form>
            <Grid
                container
                display={'flex'}
                columnSpacing={3}
                alignItems='center'
                justifyContent='center'
                marginTop={2}>
                <Grid item>
                    <Button variant="contained" color="error">Cancel</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Sign In</Button>
                </Grid>
            </Grid>
        </div>
    )
}