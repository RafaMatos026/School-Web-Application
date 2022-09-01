import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { useState, useEffect } from 'react';
import { ITeacher } from '../../../shared/Interfaces/interfaces';
import { BASE_URL, teacher } from '../../../shared/consts';
import CircularProgress from '@mui/material/CircularProgress';

export default function DisabledTeachers() {

    const [loading, setLoading] = useState(true);
    const [teachers, setTeachers] = useState<ITeacher[]>([]);

    useEffect(() => {
        let url = BASE_URL + '/users/getDisabledTeachers';
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
                setTeachers(data);
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
            {!loading && teachers.length === 0 && (<h2>No teachers are disabled!</h2>)}
            {!loading && teachers.length > 0 && (
                <Box width={'100%'}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Student Id</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Student Name</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Email</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {teachers.map((teacher, index) => (
                                    <TableRow key={index}>
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell align='center'>{teacher._id}</TableCell>
                                        <TableCell align='center'>{teacher.FName + ' ' + teacher.LName}</TableCell>
                                        <TableCell align='center'>{teacher.Email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </>
    )
}