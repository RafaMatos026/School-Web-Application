import { useEffect, useState } from "react"
import Checkbox from '@mui/material/Checkbox';
import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { BASE_URL } from "../../../shared/consts";
import { useParams } from "react-router-dom";

export default function AssignedTeachers() {
    const [checks, setChecks] = useState<string[]>([])
    const [teachers, setTeachers] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const { _id } = useParams();

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
        let url = BASE_URL + '/classes/assignedTeachers/' + _id
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setTeachers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, [])

    return (
        <Box width={'100%'}>
            {loading && (<h2>Loading...</h2>)}
            {!loading && teachers.length === 0 && (<h2>No teachers assigned to this class yet...</h2>)}
            {!loading && teachers.length > 0 && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                <StyledTableCell width={'15%'} align='center'>Teacher ID</StyledTableCell>
                                <StyledTableCell width={'15%'} align='center'>Name</StyledTableCell>
                                <StyledTableCell width={'5%'} align='center'>Selection</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {teachers.map((teacher, index) => (
                                <TableRow key={index}>
                                    <TableCell align='center'>{index + 1}</TableCell>
                                    <TableCell align='center'>{teacher}</TableCell>
                                    <TableCell align='center'>{'Name here'}</TableCell>
                                    <TableCell align='center'>
                                        <Checkbox
                                            value={teacher}
                                            checked={checks.includes(teacher)}
                                            onChange={handleCheckboxes} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    )
}