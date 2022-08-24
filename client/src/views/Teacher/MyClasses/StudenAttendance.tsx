import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ISurvey } from '../../../shared/Interfaces/interfaces';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '../../../shared/components/Modal';
import {BASE_URL } from '../../../shared/consts'

export default function StudentAttendance() {
    const { _id } = useParams();
    const [loadingTable, setLoadingTable] = useState(true);
    const [loadingModal, setLoadingModal] = useState(true);
    const [surveys, setSurveys] = useState<ISurvey[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [presents, setPresents] = useState([]);
    const [absents, setAbsents] = useState([]);

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
        LoadSurveys();
    }, [])

    function LoadSurveys() {
        let url = BASE_URL + "/presences/getSurveys/" + _id;
        fetch(url)
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
    }

    return (
        <>
            {loadingTable && <h1>Loading...</h1>}
            {!loadingTable && (
                <Box width={'100%'}>
                    <Button color='success' variant='contained' onClick={() => createSurvey()}>New Survey</Button>
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
                {absents.length == 0 && presents.length == 0 && (<h2>No info about student attendance to this class attendance survey!</h2>)}
                {(absents.length > 0 || presents.length > 0) && (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Justified</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {presents.map((present, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{present}</TableCell>
                                        <TableCell align="center">Present</TableCell>
                                        <TableCell align="center">find a way to know</TableCell>
                                    </TableRow>
                                ))}
                                {absents.map((absent, index) => (
                                    <TableRow>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{absent}</TableCell>
                                        <TableCell align="center">Absent</TableCell>
                                        <TableCell align="center">find a way to know</TableCell>
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
        let urlA = BASE_URL + '/presences/getAbsents/' + _id;
        let urlP = BASE_URL + '/presences/getPresents/' + _id;

        fetch(urlA)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setAbsents(data);
            })
            .catch(err => {
                console.log(err.message);
            })

        fetch(urlP)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setLoadingModal(false);
                setPresents(data);
            })
            .catch((err) => {
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
                "Content-type": "application/json; charset=UTF-8"
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
        LoadSurveys();
    }

    function closeSurvey(_id: string) {
        let url = BASE_URL + '/presences/closeSurvey/' + _id;
        fetch(url, {
            method: 'PUT'
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
        LoadSurveys();
    }
}