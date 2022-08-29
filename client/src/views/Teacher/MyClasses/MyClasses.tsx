import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../../shared/consts';
import { IMyClasses } from '../../../shared/Interfaces/interfaces';
import { AuthContext } from '../../../auth/AuthContext';

export default function MyClasses() {

    const [loading, setLoading] = useState(true);
    const [MyClasses, setMyClasses] = useState<any[]>([]);
    const user_id = useContext(AuthContext).user?._id;

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
        let url = BASE_URL + "/users/myClasses/" + user_id;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setMyClasses(data.MyClasses);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {!loading && MyClasses.length === 0 && (<h2>You are not assigned to any class yet!</h2>)}
            {!loading && MyClasses.length > 0 && (
                <Box width={'100%'}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={'5%'} align='center'>#</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Class Id</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Class Name</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Subject</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Head Teacher</StyledTableCell>
                                    <StyledTableCell width={'15%'} align='center'>Status</StyledTableCell>
                                    <StyledTableCell width={'10%'} align='center'>Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {MyClasses.map((MyClass: IMyClasses, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell align='center'>{index + 1}</TableCell>
                                        <TableCell align='center'>{MyClass._id}</TableCell>
                                        <TableCell align='center'>{MyClass.ClassName}</TableCell>
                                        <TableCell align='center'>{MyClass.Subject.Description}</TableCell>
                                        <TableCell align='center'>{MyClass.HeadTeacher.FName + ' ' + MyClass.HeadTeacher.LName}</TableCell>
                                        <TableCell align='center'>{MyClass.Status ? "Active" : "Class not active"}</TableCell>
                                        <TableCell align='center'>
                                            <Link to={'/student/myClasses/' + MyClass._id}>
                                                <IconButton >
                                                    <MoreHorizIcon />
                                                </IconButton>
                                            </Link>
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