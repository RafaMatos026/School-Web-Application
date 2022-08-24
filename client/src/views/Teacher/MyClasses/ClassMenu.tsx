import { Grid, Card, Box, CardHeader, CardActionArea, Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SubmitWork from './SubmitWork';
import SubmitEvaluation from './SubmitEvaluation';
import AddSummary from './AddSummary';



export default function ClassMenu() {
    const [workModal, setOpenWork] = useState(false);
    const [evaluationModal, setOpenEvaluation] = useState(false);
    const [summaryModal, setOpenSummary] = useState(false);
    const navigate = useNavigate();
    const { _id } = useParams();

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container xs={12} columnSpacing={3} rowSpacing={3} display='flex' justifyContent={'start'} alignItems='center'>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => setOpenSummary(true)}>
                            <CardHeader title='Add Summary' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/teacher/myClasses/' + _id + '/past-summaries')}>
                            <CardHeader title='View Past Summaries' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => navigate('/teacher/myClasses/' + _id + '/student-attendance')}>
                            <CardHeader title='Student Attendance' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card
                        variant='outlined'
                        component={Paper}>
                        <CardActionArea onClick={() => setOpenWork(true)}>
                            <CardHeader title='Submit Class Work' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card
                        variant='outlined'
                        component={Paper}>
                        <CardActionArea onClick={() => setOpenEvaluation(true)}>
                            <CardHeader title='Submit Evaluation' />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <SubmitWork open={workModal} setOpen={setOpenWork} />
            <SubmitEvaluation open={evaluationModal} setOpen={setOpenEvaluation} />
            <AddSummary open={summaryModal} setOpen={setOpenSummary} />
        </Box>
    )
}