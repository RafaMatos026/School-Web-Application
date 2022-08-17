import { Grid, Card, Box, CardHeader, CardActionArea, Paper } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function ClassMenu() {
    const { _id } = useParams();
    let navigate = useNavigate();

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container lg={12} columnSpacing={3} rowSpacing={3} display='flex' justifyContent={'start'} alignItems='center'>
                <Grid item lg={4} textAlign='center'>
                    <Card
                        variant='outlined'
                        component={Paper}>
                        <CardActionArea onClick={() => navigate('/admin/class/' + _id + '/edit')}>
                            <CardHeader title='Edit Class' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/admin/class/' + _id + '/assign-students')}>
                            <CardHeader title='Assign Students' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/admin/class/' + _id + '/assigned-students')}>
                            <CardHeader title='Assigned Students' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/admin/class/' + _id + '/assign-teachers')}>
                            <CardHeader title='Assign Teachers' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} textAlign='center'>
                    <Card
                        variant='outlined'
                        component={Paper}>
                        <CardActionArea onClick={() => navigate('/admin/class/' + _id + '/assigned-teachers')}>
                            <CardHeader title='Assigned Teachers' />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}