import { Grid, Card, Box, CardHeader, CardActionArea, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ClassMenu() {
    const navigate = useNavigate();
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container xs={12} columnSpacing={3} rowSpacing={3} display='flex' justifyContent={'start'} alignItems='center'>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/student/myClasses/classId/submit-absence-justification')}>
                            <CardHeader title='Submit Absence Justification' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/student/myClasses/classId/past-summaries')}>
                            <CardHeader title='View Past Summaries' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/student/myClasses/classId/mark-presence')}>
                            <CardHeader title='Mark Presence' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card
                        variant='outlined'
                        component={Paper}>
                        <CardActionArea onClick={() => navigate('/student/myClasses/classId/submit-class-work')}>
                            <CardHeader title='Submit Class Work' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card
                        variant='outlined'
                        component={Paper}>
                        <CardActionArea onClick={() => navigate('/student/myClasses/classId/submitted-evaluations')}>
                            <CardHeader title='Submitted Evaluation' />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}