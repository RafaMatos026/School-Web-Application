import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IClass } from '../../../shared/Interfaces/interfaces';

const baseUrl = "http://localhost:3001";

export default function DisabledClasses() {

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
        let url: string = baseUrl + '/classes/getDisabledClasses';
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setClasses(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {classes.length === 0 && <h1>No Classes are disabled</h1>}
            {(!loading && classes.length !== 0) && (
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
                                        <TableCell align='center'>{aula.Subject}</TableCell>
                                        <TableCell align='center'>
                                            <IconButton onClick={() => navigate('/admin/class/' + aula._id)}>
                                                <EditIcon />
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
}