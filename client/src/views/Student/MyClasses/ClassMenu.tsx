import { Grid, Card, Box, CardHeader, CardActionArea, Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SubmitWork from './SubmitWork';
import SubmitJustification from './SubmitJustification';
import MarkPresence from './MarkPresence';

export default function ClassMenu() {
    const { _id } = useParams();
    const [workModal, setOpenWork] = useState(false);
    const [presenceModal, setOpenPresence] = useState(false);
    const [absenceModal, setOpenAbsence] = useState(false);

    const navigate = useNavigate();

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container xs={12} columnSpacing={3} rowSpacing={3} display='flex' justifyContent={'start'} alignItems='center'>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => setOpenAbsence(true)}>
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
                        <CardActionArea onClick={() => setOpenPresence(true)}>
                            <CardHeader title='Mark Presence' />
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
                        <CardActionArea onClick={() => navigate('/student/myClasses/' + _id + '/submitted-evaluations')}>
                            <CardHeader title='Evaluations' />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <SubmitWork open={workModal} setOpen={setOpenWork} />
            <SubmitJustification open={absenceModal} setOpen={setOpenAbsence} />
            <MarkPresence open={presenceModal} setOpen={setOpenPresence} />
        </Box>
    )
}