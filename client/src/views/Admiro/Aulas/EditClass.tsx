import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function EditClass() {
    return (
        <>
            <form noValidate autoComplete="false">
                <Box display={'flex'} justifyContent='center' flexDirection={'column'} alignItems='center' marginTop={5}>
                    <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'}>
                        <Typography textAlign={'start'}>Class Name</Typography>
                        <TextField size="small" type='text' variant="outlined" />
                    </Box>
                    <Box width={'30%'} marginTop={3}>
                        <Typography textAlign={'start'}>Subject</Typography>
                        <Select fullWidth size='small'>
                            <MenuItem disabled value=''>
                                <em>Select a subject...</em>
                            </MenuItem>
                            <MenuItem value='math' >Math</MenuItem>
                            <MenuItem value='science' >Science</MenuItem>
                            <MenuItem value='history'>History</MenuItem>
                        </Select>
                    </Box>
                    <Box width={'30%'} marginTop={3}>
                        <Typography textAlign={'start'}>Head Teacher</Typography>
                        <Select fullWidth size='small'>
                            <MenuItem disabled value=''><em>Select the headteacher...</em></MenuItem>
                            <MenuItem value='jondoe' >Jon Doe</MenuItem>
                            <MenuItem value='michaeltommy' >Michael Tommy</MenuItem>
                            <MenuItem value='reedrichards'>Reed Richards</MenuItem>
                        </Select>
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
                    <Button variant="contained">Save</Button>
                </Grid>
            </Grid>
        </>
    )
}