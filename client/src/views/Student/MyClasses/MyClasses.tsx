import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function MyClasses() {

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
        <Box width={'100%'}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                            <StyledTableCell width={'15%'} align='center'>Class Id</StyledTableCell>
                            <StyledTableCell width={'15%'} align='center'>Class Name</StyledTableCell>
                            <StyledTableCell width={'10%'} align='center'>More</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align='center'>1</TableCell>
                            <TableCell align='center'>C20233</TableCell>
                            <TableCell align='center'>Math</TableCell>
                            <TableCell align='center'>
                                <Link to={'/student/myClasses/classId'}>
                                    <IconButton >
                                        <MoreHorizIcon />
                                    </IconButton>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>2</TableCell>
                            <TableCell align='center'>C20220</TableCell>
                            <TableCell align='center'>Math</TableCell>
                            <TableCell align='center'>
                                <IconButton >
                                    <MoreHorizIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>3</TableCell>
                            <TableCell align='center'>C20240</TableCell>
                            <TableCell align='center'>Math</TableCell>
                            <TableCell align='center'>
                                <IconButton >
                                    <MoreHorizIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>4</TableCell>
                            <TableCell align='center'>C20233</TableCell>
                            <TableCell align='center'>Math</TableCell>
                            <TableCell align='center'>
                                <IconButton >
                                    <MoreHorizIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}