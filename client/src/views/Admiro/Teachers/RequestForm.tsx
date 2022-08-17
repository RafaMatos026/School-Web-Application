import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ITeacher } from '../../../shared/Interfaces/interfaces';

const baseUrl = 'http://localhost:3001';

export default function RegistrationForm() {
    let { _id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<ITeacher>();

    useEffect(() => {
        let url = baseUrl + "/users/getUser/" + _id;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setUser(data[0]);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {!loading && (
                <>
                    <Box display={'flex'} justifyContent='center' flexDirection={'column'} alignItems='center'>
                        <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'}>
                            <Typography textAlign={'start'}>First Name</Typography>
                            <TextField inputProps={{ readOnly: true }} size="small" value={user?.FName} type='text' variant="outlined" />
                        </Box>
                        <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'} marginTop={3}>
                            <Typography textAlign={'start'}>Last Name</Typography>
                            <TextField inputProps={{ readOnly: true }} size="small" value={user?.LName} type='text' variant="outlined" />
                        </Box>
                        <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'} marginTop={3}>
                            <Typography textAlign={'start'}>Email</Typography>
                            <TextField inputProps={{ readOnly: true }} size="small" value={user?.Email} type='email' variant="outlined" />
                        </Box>
                        <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'} marginTop={3}>
                            <Typography textAlign={'start'}>Birthday</Typography>
                            <TextField inputProps={{ readOnly: true }} sx={{ width: '100%' }} value={user?.Birthday.toString().slice(0, 10)} size="small" type='text' variant="outlined" />
                        </Box>
                    </Box>
                    <Grid container
                        display={'flex'}
                        columnSpacing={3}
                        alignItems='center'
                        justifyContent='center'
                        marginTop={3}>
                        <Grid item >
                            <Button variant="contained" color="error" onClick={() => DeclineRegister()}>Decline</Button>
                        </Grid>
                        <Grid item >
                            <Button variant="contained" onClick={() => AcceptRegister()}>Accept</Button>
                        </Grid>
                    </Grid></>
            )}
        </>
    )

    function AcceptRegister() {
        let url = baseUrl + "/users/acceptTeacher/" + _id;
        fetch(url, {
            method: 'PUT'
        })
            .then((response) => {
                if (response.ok) {
                    alert('Teacher accepted!');
                    navigate('/admin/registration-requests');
                } else {
                    alert('An error has ocurred!');
                }
                response.json()
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    function DeclineRegister() {
        let url = baseUrl + "/users/declineTeacher/" + _id;
        fetch(url, {
            method: 'PUT'
        })
            .then((response) => {
                if (response.ok) {
                    alert('Registration Declined!');
                    navigate('/admin/registration-requests');
                } else {
                    alert('An error has ocurred!');
                }
                response.json()
            })
            .catch(err => {
                console.log(err.message);
            })
    }
}