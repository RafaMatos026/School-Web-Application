import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISubject, ITeacher } from '../../../shared/Interfaces/interfaces';
import { BASE_URL } from '../../../shared/consts';

export default function CreateClass() {
    const [subjects, setSubjects] = useState<ISubject[]>([])
    const [teachers, setTeachers] = useState<ITeacher[]>([]);
    const [ClassName, setClassName] = useState<string>("");
    const [Subject, setSubject] = useState<string>("");
    const [HeadTeacher, setHeadTeacher] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        getSubjects();
        getTeachers();
    }, [])

    function getSubjects() {
        let url = BASE_URL + "/subjects/getSubjects";
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
                setSubjects(data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    function getTeachers() {
        let url = BASE_URL + "/users/getTeachers";
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
                setTeachers(data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <>
            <form noValidate autoComplete="false">
                <Box display={'flex'} justifyContent='center' flexDirection={'column'} alignItems='center' marginTop={5}>
                    <Box width={'30%'} display={'flex'} flexDirection='column' justifyContent={'center'}>
                        <Typography textAlign={'start'}>Class Name</Typography>
                        <TextField size="small" type='text' variant="outlined" value={ClassName} onChange={(e) => setClassName(e.target.value)} />
                    </Box>
                    <Box width={'30%'} marginTop={3}>
                        <Typography textAlign={'start'}>Subject</Typography>
                        <Select fullWidth size='small' value={Subject} onChange={(e) => setSubject(e.target.value)}>
                            <MenuItem disabled value=''>
                                Select a subject...
                            </MenuItem>
                            {subjects.map((subject, index) => (
                                <MenuItem key={index} value={subject._id} >{subject.Description}</MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <Box width={'30%'} marginTop={3}>
                        <Typography textAlign={'start'}>Head Teacher</Typography>
                        <Select fullWidth size='small' value={HeadTeacher} onChange={(e) => setHeadTeacher(e.target.value)}>
                            <MenuItem disabled value=''>
                                <em>Select the head teacher...</em>
                            </MenuItem>
                            {teachers.map((teacher, index) => (
                                <MenuItem key={index} value={teacher._id} >{
                                    teacher.FName + ' ' + teacher.LName
                                }</MenuItem>
                            ))}
                        </Select>
                    </Box>
                </Box>
            </form>
            <Grid
                container
                display={'flex'}
                columnSpacing={3}
                alignItems='center'
                justifyContent='center'
                marginTop={3}>
                <Grid item>
                    <Button variant="contained" color="error">Cancel</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={() => CreateClass()}>Create</Button>
                </Grid>
            </Grid>
        </>
    )

    //I'm not dealing with any errors yet
    function CreateClass() {
        let url = BASE_URL + "/classes/create";
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                ClassName: ClassName,
                Subject: Subject,
                HeadTeacher: HeadTeacher,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('The class was created!');
                    navigate('/admin/class-list');
                }
                response.json();
            })
            .catch(err => {
                console.log(err);
                alert("Error:" + err.message);
            })
    }
}