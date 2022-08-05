import { Grid, Card, Box, CardHeader, CardActionArea, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ClassMenu() {
    let navigate = useNavigate();

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container md={12} columnSpacing={3} rowSpacing={3} display='flex' justifyContent={'center'} alignItems='center'>
                <Grid item md={6} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/admin/class/classId/assign-students')}>
                            <CardHeader title='Assign Student' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={6} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/admin/class/classId/assigned-students')}>
                            <CardHeader title='Assigned Students' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={6} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/admin/class/classId/assign-teachers')}>
                            <CardHeader title='Assign Teacher' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={6} textAlign='center'>
                    <Card
                        variant='outlined'
                        component={Paper}>
                        <CardActionArea onClick={() => navigate('/admin/class/classId/assigned-teachers')}>
                            <CardHeader title='Assigned Teachers' />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}