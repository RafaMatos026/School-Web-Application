import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState, useEffect } from 'react';

const BASE_URL: string = "http://localhost:3001";

interface Class {
    _id: string;
    ClassName: string;
    Subject: string;
    HeadTeacher: string;
    Status: boolean;
}

export default function MyClasses() {

    const [loadingTable, setLoadingTable] = useState(true);
    const [classes, setClasses] = useState<Class[]>([]);

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
        let url = BASE_URL + "/classes/getActiveClasses"
        fetch(url, {})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setClasses(data);
                setLoadingTable(false);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    return (
        <>
            {loadingTable && <h1>Loading...</h1>}
            {!loadingTable && (
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
                                    <StyledTableCell width={'15%'} align='center'>Status</StyledTableCell>
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
                                        <TableCell align='center'>{aula.Status ? "Active" : "Class not active"}</TableCell>
                                        <TableCell align='center'>
                                            <Link to={'/student/myClasses/' + aula._id}>
                                                <IconButton >
                                                    <MoreHorizIcon />
                                                </IconButton>
                                            </Link>
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