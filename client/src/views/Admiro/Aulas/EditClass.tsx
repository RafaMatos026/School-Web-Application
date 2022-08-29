import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { IClass, ISubject, ITeacher } from '../../../shared/Interfaces/interfaces';
import { BASE_URL } from '../../../shared/consts';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditClass() {
    const { _id } = useParams();
    const [Class, setClass] = useState<IClass | null>(null);
    const [HeadTeacher, setHeadTeacher] = useState<string>("");
    const [ClassName, setClassName] = useState<string>("");
    const [Subject, setSubject] = useState<string>("");
    const [subjects, setSubjects] = useState<ISubject[]>([]);
    const [teachers, setTeachers] = useState<ITeacher[]>([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        getClass();
        getSubjects();
        getTeachers();
    }, [])

    function getClass() {
        let url = BASE_URL + "/classes/getClass/" + _id;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data: any) => {
                setClass(data);
                console.log(data);
                if (Class) {
                    setHeadTeacher(Class.HeadTeacher);
                    setSubject(Class.Subject);
                    setClassName(Class.ClassName);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    function getSubjects() {
        let url = BASE_URL + "/subjects/getSubjects";
        fetch(url)
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
        fetch(url)
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
            {loading && (<h2>Loading...</h2>)}
            {!loading && (
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
                                        <em>Select the headteacher...</em>
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
                            <Button variant="contained" color="error" onClick={() => navigate(-1)}>Cancel</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={() => SendUpdate()}>Save</Button>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    )

    function SendUpdate() {
        if (Subject && HeadTeacher && ClassName) {
            let url = BASE_URL + '/classes/updateClass/' + _id;
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify({
                    ClassName: ClassName,
                    Subject: Subject,
                    HeadTeacher: HeadTeacher,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then((response) => {
                    if (response.ok) {
                        alert('Class information has been updated successfully!');
                        navigate('/admin/class/' + _id);
                    }
                    response.json();
                })
                .catch((error) => {
                    alert("Error: " + error.message);
                })
        } else {
            alert('All fields are mandatory!');
        }
    }
}