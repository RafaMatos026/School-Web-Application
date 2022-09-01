import Checkbox from '@mui/material/Checkbox';
import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../../shared/consts';
import { useNavigate, useParams } from 'react-router-dom';
import { ITeacher } from '../../../shared/Interfaces/interfaces';
import CircularProgress from '@mui/material/CircularProgress';

export default function AssignTeacher() {

    const { _id } = useParams();
    const [checks, setChecks] = useState<string[]>([])
    const [teachers, setTeachers] = useState<ITeacher[]>([]);
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
        let url = BASE_URL + '/users/assignableTeachers/' + _id;
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
                    setTeachers([]);
                    setLoading(false);
                } else {
                    console.log(data);
                    setTeachers(data);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, [])

    return (
        <Box width={'100%'}>
            {loading && (
                <Box display={'flex'}>
                    <CircularProgress />
                </Box>
            )}
            {!loading && teachers.length === 0 && (<h2>No teachers available to be assigned to this class!</h2>)}
            {!loading && teachers.length > 0 && (
                <>
                    {checks.length > 0 && (<Button variant='contained' color='success' onClick={() => AssignTeachers()}>Save</Button>)}
                    {checks.length === 0 && (
                        <Button variant='contained' color='success' disabled>Save</Button>
                    )}

                    <TableContainer component={Paper} sx={{ marginTop: '25px' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Teacher ID</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Name</StyledTableCell>
                                    <StyledTableCell width={'5%'} align='center'>Selection</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {teachers.map((teacher, index) => (
                                    <TableRow>
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell align='center'>{teacher._id}</TableCell>
                                        <TableCell align='center'>{teacher.FName + ' ' + teacher.LName}</TableCell>
                                        <TableCell align='center'>
                                            <Checkbox
                                                value={teacher._id}
                                                checked={checks.includes(teacher._id)}
                                                onChange={handleCheckboxes} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )}
        </Box>
    )

    function AssignTeachers() {
        let url = BASE_URL + "/classes/assignTeachers/" + _id;
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
                    alert('Teachers were assigned to the class!');
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