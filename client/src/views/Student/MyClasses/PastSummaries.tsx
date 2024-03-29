import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from '../../../shared/components/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../shared/consts';
import CircularProgress from '@mui/material/CircularProgress';

interface Summary {
    SummaryName: string;
    Date: Date;
    Description: string;
    classId: string;
    _id: string;
}

export default function PastSummaries() {
    const { _id } = useParams();
    const [open, setOpen] = useState(false);
    const [loadingTable, setLoadingTable] = useState(true);
    const [loadingModal, setLoadingModal] = useState(true);
    const [summaries, setSummaries] = useState<Summary[]>([]);
    const [summary, setSummary] = useState<Summary>();

    useEffect(() => {
        let url = BASE_URL + "/summaries/getSummariesClass/" + _id;
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
                setSummaries(data);
                setLoadingTable(false);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

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
            {loadingTable && (
                <Box display={'flex'}>
                    <CircularProgress />
                </Box>
            )}
            {!loadingTable && summaries.length === 0}
            {!loadingTable && (
                <Box width={'100%'}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Title</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Date</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Submitted at</StyledTableCell>
                                    <StyledTableCell width={'10%'} align='center'>More</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {summaries.map((summary, index) => (
                                    <TableRow key={index}>
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell align='center'>{summary.SummaryName}</TableCell>
                                        <TableCell align='center'>{summary.Date.toString().slice(0, 10)}</TableCell>
                                        <TableCell align='center'>{summary.Date.toString().slice(11, 16)}</TableCell>
                                        <TableCell align='center'>
                                            <IconButton onClick={() => OpenSummary(summary._id)}>
                                                <MoreHorizIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}

            <Modal open={open} title={summary ? summary.SummaryName : "Error"} setOpen={setOpen}>
                {loadingModal && (
                    <Box display={'flex'}>
                        <CircularProgress />
                    </Box>
                )}
                {!loadingModal && !summary && (<h2>
                    Something went wrong... Try again later!
                </h2>)}
                {!loadingModal && summary && (
                    <>
                        <Typography gutterBottom>Summary:</Typography>
                        <TextField InputProps={{ readOnly: true, }} multiline rows={5} value={summary?.Description} fullWidth />
                    </>
                )}
            </Modal>

        </>
    )

    function OpenSummary(id: string) {
        let url: string = BASE_URL + "/summaries/getSummary/" + id;
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
                setSummary(data);
                setLoadingModal(false)
            })
            .catch((error) => {
                console.log(error.message)
            })
        setOpen(true);
    }
}