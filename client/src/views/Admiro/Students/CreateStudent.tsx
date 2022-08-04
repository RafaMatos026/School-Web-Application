import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function CreateStudent() {
    return (
        <>
            <form noValidate autoComplete="false">
                <Box width={'100%'} display={'flex'} justifyContent='center' flexDirection={'column'} alignItems='center' marginTop={5}>
                    <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'}>
                        <Typography textAlign={'start'}>First Name</Typography>
                        <TextField size="small" type='text' variant="outlined" />
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
                        <Typography textAlign={'start'}>Birthday</Typography>
                        <TextField sx={{ width: '100%' }} size="small" type='date' variant="outlined" />
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
                    <Button variant="contained">Create</Button>
                </Grid>
            </Grid>
        </>
    )
}