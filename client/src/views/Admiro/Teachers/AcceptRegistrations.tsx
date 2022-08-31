import { CardActions } from '@material-ui/core';
import { Button, CardHeader, Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITeacher } from '../../../shared/Interfaces/interfaces';
import { BASE_URL } from '../../../shared/consts'
export default function AcceptRegistration() {
    const navigate = useNavigate();
    const [requests, setRequests] = useState<ITeacher[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url = BASE_URL + "/users/registrationRequests";
        fetch(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setRequests(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    })

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {!requests && <h1>No requests...</h1>}
            {!loading && (
                <Box width={'100%'}>
                    <Grid container rowSpacing={2} columnSpacing={2} display={'flex'} justifyContent='start'
                        alignItems={'center'}>
                        {requests.map((request, index) => (
                            <Grid xs={4} md={2} key={index} item>
                                <Card variant='outlined' sx={{ height: '175px' }}>
                                    <CardHeader title={request.FName + ' ' + request.LName}
                                        subheader={`Request ${index + 1}`} />
                                    <CardActions>
                                        <Button variant='contained'
                                            onClick={() => navigate('/admin/request/' + request._id)}
                                            fullWidth>
                                            View Request
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </>
    )
}