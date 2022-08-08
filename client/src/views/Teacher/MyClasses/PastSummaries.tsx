import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from '../../../shared/components/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function PastSummaries() {

    const [open, setOpen] = useState(false);

    const dummy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna lectus, pharetra quis egestas ac, blandit id tortor. Proin luctus porttitor lectus, vel auctor velit vehicula nec. Morbi eget nisi eget dui malesuada cursus. Donec sit amet ipsum eu velit rutrum euismod eget eu nisi. In magna quam, luctus ac tortor iaculis, ultrices convallis leo.'

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
            <Box width={'100%'}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                <StyledTableCell width={'15%'} align='center'>Date</StyledTableCell>
                                <StyledTableCell width={'15%'} align='center'>Submitted at</StyledTableCell>
                                <StyledTableCell width={'10%'} align='center'>More</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align='center'>1</TableCell>
                                <TableCell align='center'>26/04/2022</TableCell>
                                <TableCell align='center'>12:40</TableCell>
                                <TableCell align='center'>
                                    <IconButton onClick={() => setOpen(true)}>
                                        <MoreHorizIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='center'>2</TableCell>
                                <TableCell align='center'>26/04/2022</TableCell>
                                <TableCell align='center'>13:00</TableCell>
                                <TableCell align='center'>
                                    <IconButton onClick={() => setOpen(true)}>
                                        <MoreHorizIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='center'>3</TableCell>
                                <TableCell align='center'>26/04/2022</TableCell>
                                <TableCell align='center'>17:00</TableCell>
                                <TableCell align='center'>
                                    <IconButton onClick={() => setOpen(true)}>
                                        <MoreHorizIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='center'>4</TableCell>
                                <TableCell align='center'>26/04/2022</TableCell>
                                <TableCell align='center'>9:00</TableCell>
                                <TableCell align='center'>
                                    <IconButton onClick={() => setOpen(true)}>
                                        <MoreHorizIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Modal open={open} title={'Modal dinâmico'} setOpen={setOpen}>
                <Typography gutterBottom>Summary:</Typography>
                <TextField InputProps={{ readOnly: true, }} multiline rows={5} value={dummy} fullWidth />
            </Modal>
        </>
    )
}