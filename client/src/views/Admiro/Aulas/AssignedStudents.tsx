import { useEffect, useState } from "react"
import Checkbox from '@mui/material/Checkbox';
import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../../shared/consts';

export default function AssignedStudents() {
    const { _id } = useParams();
    const [checks, setChecks] = useState<string[]>([])
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true);

    const handleCheckboxes = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = checks.indexOf(event.target.value)
        if (index === -1) {
            setChecks([...checks, event.target.value])
        } else {
            setChecks(checks.filter((check) => check !== event.target.value))
        }
    }

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
        let url = BASE_URL + "/classes/assignedStudents/" + _id;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setStudents(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            {loading && <h2>Loading...</h2>}
            {!loading && students.length === 0 && (<h2>No students are assigned to this class yet...</h2>)}
            {!loading && students.length > 0 && (
                <Box width={'100%'}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Student ID</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Student Name</StyledTableCell>
                                    <StyledTableCell width={'5%'} align='center'>Selection</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {students.map((student, index) => (
                                    <TableRow key={index}>
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell align='center'>{student}</TableCell>
                                        <TableCell align='center'>{'Name here'}</TableCell>
                                        <TableCell align='center'>
                                            <Checkbox
                                                value={'studentId1'}
                                                checked={checks.includes('studentId1')}
                                                onChange={handleCheckboxes} />
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