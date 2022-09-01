import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../../shared/consts';
import { useParams } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IEvaluation } from '../../../shared/Interfaces/interfaces';
import CircularProgress from '@mui/material/CircularProgress';

export default function PastSummaries() {
    const { _id } = useParams();
    const [evaluations, setEvaluations] = useState<IEvaluation[]>([]);
    const [loading, setLoading] = useState(true);

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
        let url = BASE_URL + '/evaluation/getEvaluationsByClass/' + _id;
        fetch(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setEvaluations(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])

    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            {loading && (
                <Box display={'flex'}>
                    <CircularProgress />
                </Box>
            )}
            {!loading && evaluations.length === 0 && (<h2>No evaluations submitted to this class!</h2>)}
            {!loading && evaluations.length > 0 && (
                <Box width={'100%'}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Title</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Date Added</StyledTableCell>
                                    <StyledTableCell width={'10%'} align='center'>Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {evaluations.map((evaluation, index) => (
                                    <TableRow key={index}>
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell align='center'>{evaluation.EvaluationName}</TableCell>
                                        <TableCell align='center'>{evaluation.DateAdded.toString().slice(0, 10)}</TableCell>

                                        <TableCell align='center'>
                                            <IconButton onClick={() => openInNewTab(evaluation.fileUrl)}>
                                                <VisibilityIcon />
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