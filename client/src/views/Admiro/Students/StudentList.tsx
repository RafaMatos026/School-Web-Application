import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { useState, useEffect } from 'react';
import { IStudent } from '../../../shared/Interfaces/interfaces';
import { BASE_URL } from '../../../shared/consts';
import CircularProgress from '@mui/material/CircularProgress';

export default function StudentList() {

    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState<IStudent[]>([]);

    useEffect(() => {
        let url = BASE_URL + '/users/getActiveStudents';
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
                setStudents(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    })

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    return (
        <>
            {loading && (
                <Box display={'flex'}>
                    <CircularProgress />
                </Box>
            )}
            {!loading && students.length === 0 && (
                <h2>No students were created yet!</h2>
            )}
            {!loading && students.length > 0 && (
                <Box width={'100%'}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Student Id</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Student Name</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Email</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Account Status</StyledTableCell>
                                    <StyledTableCell width={'10%'} align='center'>Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {students.map((student, index) => (
                                    <TableRow key={index}>
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell align='center'>{student._id}</TableCell>
                                        <TableCell align='center'>{student.FName + ' ' + student.LName}</TableCell>
                                        <TableCell align='center'>{student.Email}</TableCell>
                                        <TableCell align='center'>{student.Status ? "Active" : "Inactive"}</TableCell>
                                        <TableCell align='center'>
                                            <IconButton onClick={() => DisableStudent(student._id)}>
                                                <PersonOffIcon color='error' />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </>
    )

    function DisableStudent(_id: string) {
        let url = BASE_URL + "/users/disableUser/" + _id;
        fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('Student was disabled!');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}