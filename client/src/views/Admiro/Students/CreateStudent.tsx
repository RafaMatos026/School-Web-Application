import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const baseUrl = "http://localhost:3001";

export default function CreateStudent() {
    const [FirstName, setFirstName] = useState<string>("");
    const [LastName, setLastName] = useState<string>("");
    const [Email, setEmail] = useState<string>("");
    let navigate = useNavigate();

    return (
        <>
            <form noValidate autoComplete="false">
                <Box width={'100%'} display={'flex'} justifyContent='center' flexDirection={'column'} alignItems='center' marginTop={5}>
                    <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'}>
                        <Typography textAlign={'start'}>First Name</Typography>
                        <TextField size="small" type='text' value={FirstName} onChange={(e) => setFirstName(e.target.value)} variant="outlined" />
                    </Box>
                    <Box width={'30%'} marginTop={3}>
                        <Typography textAlign={'start'}>Last Name</Typography>
                        <TextField sx={{ width: '100%' }} value={LastName} onChange={(e) => setLastName(e.target.value)} size="small" type='text' variant="outlined" />
                    </Box>
                    <Box width={'30%'} marginTop={3}>
                        <Typography textAlign={'start'}>Email</Typography>
                        <TextField sx={{ width: '100%' }} value={Email} onChange={(e) => setEmail(e.target.value)} size="small" type='email' variant="outlined" />
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
                    <Button variant="contained" color="error" onClick={() => navigate(-1)}>Cancel</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={() => CreateStudent()}>Create</Button>
                </Grid>
            </Grid>
        </>
    )

    //I'm not dealing with any errors yet
    function CreateStudent() {
        let url = baseUrl + "/users/createStudent";
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                FName: FirstName,
                LName: LastName,
                Email: Email,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('The student was created!');
                    navigate('/admin/student-list');
                }
                response.json();
            })
            .catch(err => {
                console.log(err);
                alert("Error:" + err.message);
            })
    }
}