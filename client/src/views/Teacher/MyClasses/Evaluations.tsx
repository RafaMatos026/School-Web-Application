import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../shared/consts';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { IEvaluation } from '../../../shared/Interfaces/interfaces';

export default function Evaluations() {
    const { _id } = useParams()
    const [loading, setLoading] = useState(true);
    const [evaluations, setEvaluations] = useState<IEvaluation[]>([]);

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
            {loading && (<h2>Loading...</h2>)}
            {!loading && (
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
                                            <IconButton onClick={() => console.log('Remove file from db and cloudnary')}>
                                                <DeleteIcon />
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