import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
//take an eye icon here;

export default function PastSummaries() {
    const [evaluations, setEvaluations] = useState<Object>([]);
    const [loading, setLoading] = useState(false); //Change here to true


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
            {loading && <h1>Loading</h1>}
            {!loading && (
                <Box width={'100%'}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Work</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Date</StyledTableCell>
                                    <StyledTableCell width={'10%'} align='center'>Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>1</TableCell>
                                    <TableCell align='center'>Work 1</TableCell>
                                    <TableCell align='center'>26/04/2022</TableCell>
                                    <TableCell align='center'>
                                        <IconButton>
                                            <DownloadIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </>
    )
}