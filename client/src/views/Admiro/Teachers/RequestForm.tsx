import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import React from 'react';

export default function RegistrationForm() {
    return (
        <div>
            <Box display={'flex'} justifyContent='center' flexDirection={'column'} alignItems='center'>
                <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'}>
                    <Typography textAlign={'start'}>First Name</Typography>
                    <TextField disabled size="small" type='text' variant="outlined" />
                </Box>
                <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'} marginTop={3}>
                    <Typography textAlign={'start'}>Last Name</Typography>
                    <TextField disabled size="small" type='text' variant="outlined" />
                </Box>
                <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'} marginTop={3}>
                    <Typography textAlign={'start'}>Email</Typography>
                    <TextField disabled  size="small" type='email' variant="outlined" />
                </Box>
                <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'} marginTop={3}>
                    <Typography textAlign={'start'}>Birthday</Typography>
                    <TextField disabled sx={{ width: '100%' }} size="small" type='date' variant="outlined" />
                </Box>
            </Box>
            <Grid container
                display={'flex'}
                columnSpacing={3}
                alignItems='center'
                justifyContent='center'
                marginTop={3}>
                <Grid item >
                    <Button variant="contained" color="error">Decline</Button>
                </Grid>
                <Grid item >
                    <Button variant="contained">Accept</Button>
                </Grid>
            </Grid>
        </div>
    )
}