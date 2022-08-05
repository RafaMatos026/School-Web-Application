import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import PersonOffIcon from '@mui/icons-material/PersonOff';

export default function StudentList() {

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
                            <StyledTableCell width={'15%'} align='center'>Teacher ID</StyledTableCell>
                            <StyledTableCell width={'15%'} align='center'>Teacher Name</StyledTableCell>
                            <StyledTableCell width={'10%'} align='center'>Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align='center'>1</TableCell>
                            <TableCell align='center'>T20457</TableCell>
                            <TableCell align='center'>Jon Doe</TableCell>
                            <TableCell align='center'>
                                <IconButton >
                                    <EditIcon />
                                </IconButton>
                                <IconButton color='error'>
                                    <PersonOffIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>1</TableCell>
                            <TableCell align='center'>T20457</TableCell>
                            <TableCell align='center'>Jon Doe</TableCell>
                            <TableCell align='center'>
                                <IconButton >
                                    <EditIcon />
                                </IconButton>
                                <IconButton color='error'>
                                    <PersonOffIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>1</TableCell>
                            <TableCell align='center'>T20457</TableCell>
                            <TableCell align='center'>Jon Doe</TableCell>
                            <TableCell align='center'>
                                <IconButton >
                                    <EditIcon />
                                </IconButton>
                                <IconButton color='error'>
                                    <PersonOffIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>1</TableCell>
                            <TableCell align='center'>T20457</TableCell>
                            <TableCell align='center'>Jon Doe</TableCell>
                            <TableCell align='center'>
                                <IconButton >
                                    <EditIcon />
                                </IconButton>
                                <IconButton color='error'>
                                    <PersonOffIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}