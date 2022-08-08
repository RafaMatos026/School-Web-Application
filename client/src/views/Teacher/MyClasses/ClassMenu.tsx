import { Grid, Card, Box, CardHeader, CardActionArea, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ClassMenu() {
    const navigate = useNavigate();
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container xs={12} columnSpacing={3} rowSpacing={3} display='flex' justifyContent={'start'} alignItems='center'>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/teacher/myClasses/classId/add-summary')}>
                            <CardHeader title='Add Summary' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/teacher/myClasses/classId/past-summaries')}>
                            <CardHeader title='View Past Summaries' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/teacher/myClasses/classId/student-attendance')}>
                            <CardHeader title='Student Attendance' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card
                        variant='outlined'
                        component={Paper}>
                        <CardActionArea onClick={() => navigate('/teacher/myClasses/classId/submit-class-work')}>
                            <CardHeader title='Submit Class Work' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card
                        variant='outlined'
                        component={Paper}>
                        <CardActionArea onClick={() => navigate('/teacher/myClasses/classId/submit-evaluation')}>
                            <CardHeader title='Submit Evaluation' />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}