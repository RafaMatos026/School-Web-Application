import { useState } from "react"
import Checkbox from '@mui/material/Checkbox';
import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

export default function AssignedStudents(){
    const [checks, setChecks] = useState<string[]>([])

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

    return (
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
                        <TableRow>
                            <TableCell align='center'>1</TableCell>
                            <TableCell align='center'>S20233</TableCell>
                            <TableCell align='center'>Jon Doe</TableCell>
                            <TableCell align='center'>
                                <Checkbox
                                    value={'studentId1'}
                                    checked={checks.includes('studentId1')}
                                    onChange={handleCheckboxes} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>2</TableCell>
                            <TableCell align='center'>S20233</TableCell>
                            <TableCell align='center'>Jon Doe</TableCell>
                            <TableCell align='center'>
                                <Checkbox
                                    value={'studentId2'}
                                    checked={checks.includes('studentId2')}
                                    onChange={handleCheckboxes} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>3</TableCell>
                            <TableCell align='center'>S20233</TableCell>
                            <TableCell align='center'>Jon Doe</TableCell>
                            <TableCell align='center'>
                                <Checkbox
                                    value={'studentId3'}
                                    checked={checks.includes('studentId3')}
                                    onChange={handleCheckboxes} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>4</TableCell>
                            <TableCell align='center'>S20233</TableCell>
                            <TableCell align='center'>Jon Doe</TableCell>
                            <TableCell align='center'>
                                <Checkbox
                                    value={'studentId4'}
                                    checked={checks.includes('studentId4')}
                                    onChange={handleCheckboxes} />
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}