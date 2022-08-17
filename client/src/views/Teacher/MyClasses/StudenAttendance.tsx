import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import { Link, useParams } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState, useEffect } from 'react';
import { IAttendance } from '../../../shared/Interfaces/interfaces';

const baseUrl = "http://localhost:3001";

export default function StudentAttendance() {
    const { _id } = useParams();
    const [loadingTable, setLoadingTable] = useState(true);
    const [attendances, setAttendances] = useState<IAttendance[]>([]);

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
        let url = baseUrl + "/attendances/" + _id; //Pass here the class _id
    }, [])

    return (
        <>
            <Box width={'100%'}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                <StyledTableCell width={'15%'} align='center'>Student</StyledTableCell>
                                <StyledTableCell width={'15%'} align='center'>Presence</StyledTableCell>
                                <StyledTableCell width={'15%'} align='center'>Date</StyledTableCell>
                                <StyledTableCell width={'15%'} align='center'>Justified</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {attendances.map((attendance, index) => (
                                <TableRow key={index}>
                                    <TableCell align='center'>{index + 1}</TableCell>
                                    <TableCell align='center'>{attendance.Student}</TableCell>
                                    <TableCell align='center'>{attendance.Presence ? "Present" : "Absent"}</TableCell>
                                    <TableCell align='center'>{attendance.Date.toString().slice(0, 10)}</TableCell>
                                    <TableCell align='center'>Not yet implemented</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}