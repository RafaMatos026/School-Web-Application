import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { BASE_URL } from "../consts";

export default function EditProfile() {
    const user = useContext(AuthContext).user;
    const [loading, setLoading] = useState(true);
    const [ProfilePicture, setProfilePicture] = useState("");
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        let url = BASE_URL + "/users/getUser/" + user?._id;
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
                setBirthday(data.Birthday);
                setEmail(data.Email);
                setFName(data.FName);
                setLName(data.LName);
                setProfilePicture(data.ProfilePicture);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, [])

    return (
        <Box sx={{ maxWidth: 450, margin: '0 auto' }}>
            {loading && (<h2>Loading...</h2>)}
            {!loading && (
                <Grid container spacing={1}>
                    <Grid item xs={12} display='flex' justifyContent={'center'}>
                        {ProfilePicture === "" ? <Avatar sx={{ width: 100, height: 100, fontSize: 35 }}>{FName.slice(0, 1) + LName.slice(0, 1)}</Avatar> : <Avatar />}
                    </Grid>
                    <Grid item xs={12} >
                        <Typography>Profile Picture</Typography>
                        <TextField type={'file'} name='ava' id='ava' size='small' fullWidth></TextField>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography>First Name</Typography>
                        <TextField type={'text'} size='small' fullWidth value={FName} onChange={(e) => setFName(e.target.value)} />
                    </Grid>
                    <Grid xs={12} item>
                        <Typography>Last Name</Typography>
                        <TextField type={'text'} size='small' fullWidth value={LName} onChange={(e) => setLName(e.target.value)} />
                    </Grid>
                    <Grid xs={12} item>
                        <Typography>Email</Typography>
                        <TextField disabled type={'email'} size='small' fullWidth value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </Grid>
                    <Grid xs={12} item>
                        <Typography>New Password</Typography>
                        <TextField type={'password'} size='small' fullWidth value={Password} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                    <Grid xs={12} item>
                        <Typography>Confirm Password</Typography>
                        <TextField type={'password'} size='small' fullWidth value={Password} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                    <Grid xs={12} item>
                        <Typography>Birthday</Typography>
                        <TextField type={'date'} size='small' fullWidth value={Birthday} onChange={(e) => setBirthday(e.target.value.toString())} />
                    </Grid>
                    <Grid xs={12} item marginTop={2} textAlign={'center'} display='flex' justifyContent={'space-evenly'}>
                        <Button variant="contained" color="error" onClick={() => navigate(-1)}>Cancel</Button>
                        <Button variant="contained" color='success' onClick={() => SendUpdate()}>Save</Button>
                    </Grid>
                </Grid>
            )}
        </Box>
    )

    function SendUpdate() {
        let url = BASE_URL + '/users/updateUser/' + user?._id;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                ProfilePicture: ProfilePicture,
                FName: FName,
                LName: LName,
                Password: Password,
                Birthday: Birthday,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('User information have been updated successfully!');
                }
                response.json();
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            })
    }
}