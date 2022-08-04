import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";



export default function Register() {

    return (
        <>
            <form noValidate autoComplete="false">
                <Box width={'100%'} display={'flex'} justifyContent='center' flexDirection={'column'} alignItems='center' marginTop={5}>
                    <Typography variant="h3" textAlign='center' gutterBottom>Sing Up</Typography>
                    <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'}>
                        <Typography textAlign={'start'}>First Name</Typography>
                        <TextField  size="small" type='text' variant="outlined" />
                    </Box>
                    <Box width={'30%'} marginTop={3}>
                        <Typography textAlign={'start'}>Last Name</Typography>
                        <TextField sx={{ width: '100%' }} size="small" type='text' variant="outlined" />
                    </Box>
                    <Box width={'30%'} marginTop={3}>
                        <Typography textAlign={'start'}>Email</Typography>
                        <TextField sx={{ width: '100%' }} size="small" type='email' variant="outlined" />
                    </Box>
                    <Box width={'30%'} marginTop={3}>
                        <Typography textAlign={'start'}>Password</Typography>
                        <TextField sx={{ width: '100%' }} size="small" type='password' variant="outlined" />
                    </Box>
                    <Box width={'30%'} marginTop={3}>
                        <Typography textAlign={'start'}>Birthday</Typography>
                        <TextField sx={{ width: '100%' }} size="small" type='date' variant="outlined" />
                    </Box>
                    <Box width={'30%'}>
                        <Typography variant="caption" textAlign='start'>Registered Already?&nbsp;
                            <Typography variant="caption" sx={{textDecoration: 'underline'}}>Sing In</Typography>
                        </Typography>
                    </Box>
                </Box>
            </form>
            <Grid
                container
                display={'flex'}
                columnSpacing={3}
                alignItems='center'
                justifyContent='center'
                marginTop={3}>
                <Grid item>
                    <Button variant="contained" color="error">Cancel</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Sign In</Button>
                </Grid>
            </Grid>
        </>
    )
}