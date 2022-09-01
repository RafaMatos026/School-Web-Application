import { Grid, Card, Box, CardHeader, CardActionArea, Paper, Typography, Radio, FormControlLabel, RadioGroup, Button, FormControl } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SubmitWork from './SubmitWork';
import SubmitJustification from './SubmitJustification';
import { ISurvey } from '../../../shared/Interfaces/interfaces';
import Modal from '../../../shared/components/Modal';
import { AuthContext } from '../../../auth/AuthContext';
import { BASE_URL } from '../../../shared/consts'

export default function ClassMenu() {
    const { _id } = useParams();
    const [workModal, setOpenWork] = useState(false);
    const [presenceModal, setOpenPresence] = useState(false);
    const [absenceModal, setOpenAbsence] = useState(false);
    const [survey, setSurvey] = useState<ISurvey>();
    const [value, setValue] = useState<string>('false');
    const user_id = useContext(AuthContext).user?._id;

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    }

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
                        <CardActionArea onClick={() => navigate('/student/myClasses/' + _id +'/past-summaries')}>
                            <CardHeader title='View Past Summaries' />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} textAlign='center'>
                    <Card variant='outlined' component={Paper}>
                        <CardActionArea onClick={() => LoadSurvey()}>
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
            <Modal open={presenceModal} title={'Mark Presence'} setOpen={setOpenPresence}>
                {!survey && (<h2>Theres no survey open...</h2>)}
                {survey && (
                    <Grid container spacing={1}>
                        <Grid item xs={12} textAlign='center'>
                            <Typography variant="h6">Attendance survey: {survey.Date.toString().slice(0, 10) + ', ' + survey.Date.toString().slice(11, 16)}</Typography>
                        </Grid>
                        <Grid item xs={12} textAlign='center' display={'flex'} justifyContent='center' alignItems={'center'}>
                            <Typography variant="h6">Presence: </Typography>
                            <FormControl sx={{ marginLeft: 2 }}>
                                <RadioGroup
                                    value={value}
                                    onChange={handleChange}
                                    row >
                                    <FormControlLabel value="true" control={<Radio />} label="Present" />
                                    <FormControlLabel value="false" control={<Radio />} label="Absent" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} textAlign={'center'} display='flex' justifyContent={'space-evenly'}>
                            <Button variant='contained' color='error' onClick={() => setOpenPresence(false)}>
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={() => MarkPresence()}>Submit</Button>
                        </Grid>
                    </Grid>
                )}
            </Modal>
        </Box>
    )

    function MarkPresence() {
        let url = BASE_URL + "/presences/markPresence";
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                _id: _id,
                studentId: user_id,
                Present: value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    setOpenPresence(false);
                    alert("Presence status saved!");
                }
                console.log(response.body)
                response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch(err => {
                console.log(err.message);
                alert("Error: " + err.message);
            })
    }

    function LoadSurvey() {
        let url = BASE_URL + '/presences/latestSurvey/' + _id;
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
                setSurvey(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
        setOpenPresence(true)
    }
}