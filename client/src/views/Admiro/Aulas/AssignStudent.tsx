import Checkbox from '@mui/material/Checkbox';
import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IStudent } from '../../../shared/Interfaces/interfaces';
import { BASE_URL } from '../../../shared/consts';

export default function AssignStudent() {
    const { _id } = useParams();
    const [checks, setChecks] = useState<string[]>([])
    const [students, setStudents] = useState<IStudent[]>([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleCheckboxes = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = checks.indexOf(event.target.value)
        if (index === -1) {
            setChecks([...checks, event.target.value])
        } else {
            setChecks(checks.filter((check) => check !== event.target.value))
        }
    }

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
        let url = BASE_URL + "/users/assignableStudents/" + _id;
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
                if (data.status === 404) {
                    setStudents([]);
                    setLoading(false);
                } else {
                    setStudents(data);
                    setLoading(false);
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])



    return (
        <Box>
            {loading && <h2>Loading...</h2>}
            {!loading && students.length === 0 && (
                <h2>No students available to assign to this class!</h2>
            )}
            {!loading && students.length > 0 && (
                <>
                    {checks.length > 0 && (
                        <Button variant='contained' color='success' onClick={() => AssignStudents()}>Assign Students</Button>
                    )}
                    {checks.length === 0 && (
                        <Button variant='contained' color='success' disabled>Assign Students</Button>
                    )}
                    <TableContainer component={Paper} sx={{ marginTop: '25px' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Student ID</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Student Name</StyledTableCell>
                                    <StyledTableCell width={'5%'} align='center'>Selection</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {students.map((student, index) => (
                                    <TableRow key={index}>
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell align='center'>{student._id}</TableCell>
                                        <TableCell align='center'>{student.FName + ' ' + student.LName}</TableCell>
                                        <TableCell align='center'>
                                            <Checkbox
                                                value={student._id}
                                                checked={checks.includes(student._id)}
                                                onChange={handleCheckboxes} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )}
        </Box >
    )

    function AssignStudents() {
        let url = BASE_URL + "/classes/assignStudents/" + _id;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(checks),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('Students were assigned to the class!');
                    navigate("/admin/class/" + _id);
                }
                response.json();
            })
            .catch(err => {
                console.log(err.message);
                alert(err.message);
            })
    }
}