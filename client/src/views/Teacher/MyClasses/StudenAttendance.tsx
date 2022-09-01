import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ISurvey } from '../../../shared/Interfaces/interfaces';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '../../../shared/components/Modal';
import { BASE_URL } from '../../../shared/consts'
import CircularProgress from '@mui/material/CircularProgress';

export default function StudentAttendance() {
    const { _id } = useParams();
    const [loadingTable, setLoadingTable] = useState(true);
    const [loadingModal, setLoadingModal] = useState(true);
    const [surveys, setSurveys] = useState<ISurvey[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [presents, setPresents] = useState([]);
    const [absents, setAbsents] = useState([]);
    const [justifiedAbsences, setJustifiedAbsences] = useState<string[]>([]);
    const [survey, setSurvey] = useState("");

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    useEffect(() => {
        let url = BASE_URL + "/presences/getSurveys/" + _id;
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
                setSurveys(data);
                setLoadingTable(false);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, [_id])

    return (
        <>
            <Button color='success' variant='contained' sx={{ marginBottom: 2 }} onClick={() => createSurvey()}>New Survey</Button>
            {loadingTable && (
                <Box display={'flex'}>
                    <CircularProgress />
                </Box>
            )}
            {!loadingTable && surveys.length === 0 && (<h2>No student attendance surveys were created for this class!</h2>)}
            {!loadingTable && surveys.length > 0 && (
                <Box width={'100%'}>
                    <TableContainer sx={{ marginTop: 2 }} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Date</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Time</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>
                                        Absent Students
                                    </StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>
                                        Present Students
                                    </StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Status</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {surveys.map((survey, index) => (
                                    <TableRow key={index}>
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell align='center'>{survey.Date.toString().slice(0, 10)}</TableCell>
                                        <TableCell align='center'>
                                            {survey.Date.toString().slice(11, 16)}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {survey.AbsentStudents?.length > 0 ? survey.AbsentStudents.length : 0}
                                        </TableCell>
                                        <TableCell align='center'>{survey.PresentStudents?.length > 0 ? survey.PresentStudents.length : 0}</TableCell>
                                        <TableCell align='center'>{survey.open ? 'Active' : 'Closed'}</TableCell>
                                        <TableCell align='center'>
                                            <IconButton onClick={() => openAttendance(survey._id)}>
                                                <MoreHoriz />
                                            </IconButton>
                                            {survey.open ?
                                                <IconButton color='error' onClick={() => closeSurvey(survey._id)}>
                                                    <CloseIcon />
                                                </IconButton> :
                                                <IconButton disabled>
                                                    <CloseIcon />
                                                </IconButton>}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}

            <Modal open={open} setOpen={setOpen} title={'Class Attedance'}>
                {loadingModal && (<h2>Loading...</h2>)}
                {!loadingModal && absents.length === 0 && presents.length === 0 && (<h2>No student have attended the class!</h2>)}
                {!loadingModal && (absents.length > 0 || presents.length > 0) && (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">#</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Justified</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {presents.map((present, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{present}</TableCell>
                                        <TableCell align="center">Present</TableCell>
                                        <TableCell align="center">N/A</TableCell>
                                    </TableRow>
                                ))}
                                {absents.map((absent, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">{index + 2}</TableCell>
                                        <TableCell align="center">{absent}</TableCell>
                                        <TableCell align="center">Absent</TableCell>
                                        <TableCell align="center">{
                                            isJustified(absent)
                                                ? 'Justified'
                                                : <Button variant='outlined' size='small' color='success' onClick={() => Justify(absent)}>Justify</Button>
                                        }</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Modal>
        </>
    )

    function openAttendance(_id: string) {
        let url = BASE_URL + '/presences/getPresences/' + _id;

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
                setSurvey(data._id);
                setAbsents(data.absentStudents);
                setPresents(data.presentStudents)
                setJustifiedAbsences(data.justifiedAbsences)
                setLoadingModal(false);
            })
            .catch(err => {
                console.log(err.message);
            })
        setOpen(true);
    }

    function createSurvey() {
        let url = BASE_URL + '/presences/create';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                classId: _id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('New survey was created!');
                }
                response.json();
            })
            .catch(err => {
                alert('Error: ' + err.message);
            })
    }

    function closeSurvey(_id: string) {
        let url = BASE_URL + '/presences/closeSurvey/' + _id;
        fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('Attendance survey was closed!');
                    response.json();
                }
            })
            .catch(err => {
                alert('Error: ' + err.message);
            })
    }

    function isJustified(_id: string): boolean {
        if (justifiedAbsences.includes(_id)) {
            return true;
        } else {
            return false;
        }
    }

    function Justify(_id: string) {
        let url = BASE_URL + '/presences/justify/' + survey;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                studentId: _id,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('Student absence has been justified!');
                } else {
                    alert('It was not possible justify the absence... Try again later');
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}