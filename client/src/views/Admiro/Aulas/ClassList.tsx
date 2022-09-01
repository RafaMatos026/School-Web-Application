import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IClass } from '../../../shared/Interfaces/interfaces';
import { BASE_URL } from '../../../shared/consts';
import CircularProgress from '@mui/material/CircularProgress';

export default function ClassList() {

    const [classes, setClasses] = useState<IClass[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

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
        let url: string = BASE_URL + '/classes/getActiveClasses';
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
                setClasses(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])

    return (
        <>
            {loading && (
                <Box display={'flex'}>
                    <CircularProgress />
                </Box>
            )}
            {!loading && classes.length === 0 && (
                <h2>No classes were created yet!</h2>
            )}
            {!loading && classes.length > 0 && (
                <Box width={'100%'}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Class Id</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Class Name</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Subject</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Head Teacher</StyledTableCell>
                                    <StyledTableCell width={'10%'} align='center'>Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {classes.map((aula, index) => (
                                    <TableRow key={index}>
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell align='center'>{aula._id}</TableCell>
                                        <TableCell align='center'>{aula.ClassName}</TableCell>
                                        <TableCell align='center'>{aula.Subject}</TableCell>
                                        <TableCell align='center'>{aula.HeadTeacher}</TableCell>
                                        <TableCell align='center'>
                                            <IconButton onClick={() => navigate('/admin/class/' + aula._id)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => DisableClass(aula._id)}>
                                                <DisabledByDefaultIcon color='error' />
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

    function DisableClass(_id: string) {
        let url = BASE_URL + "/classes/deleteClass/" + _id;
        fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('Class was disabled!');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}