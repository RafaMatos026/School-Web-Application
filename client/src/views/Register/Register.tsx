import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardContent, Card } from "@mui/material";
import { useState } from "react";
import { BASE_URL } from "../../shared/consts";

export default function Register() {

    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");

    return (
        <Box marginTop={5}>
            <Typography variant="h3" align="center" gutterBottom>Sign Up</Typography>
            <Card sx={{ maxWidth: 450, margin: '0 auto' }} variant='outlined'>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography>First Name</Typography>
                                <TextField type={'text'} fullWidth value={FName} onChange={(e) => setFName(e.target.value)} />
                            </Grid>
                            <Grid xs={12} item>
                                <Typography>Last Name</Typography>
                                <TextField type={'text'} fullWidth value={LName} onChange={(e) => setLName(e.target.value)} />
                            </Grid>
                            <Grid xs={12} item>
                                <Typography>Email</Typography>
                                <TextField type={'email'} fullWidth value={Email} onChange={(e) => setEmail(e.target.value)} />
                            </Grid>
                            <Grid xs={12} item>
                                <Typography>Password</Typography>
                                <TextField type={'password'} fullWidth value={Password} onChange={(e) => setPassword(e.target.value)} />
                            </Grid>
                            <Grid xs={12} item>
                                <Typography>Birthday</Typography>
                                <TextField type={'date'} fullWidth value={Birthday} onChange={(e) => setBirthday(e.target.value.toString())} />
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    Already have an account?&nbsp;
                                    <Link to={'/login'} style={{ textDecoration: 'none', color: '#000000' }}>
                                        <Typography variant="caption" sx={{ textDecoration: 'underline' }}>
                                            Sign In
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid xs={12} item textAlign={'center'}>
                                <Button variant="contained" onClick={() => createAccount()}>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Box>
    )

    function createAccount() {
        let url = BASE_URL + '/users/createTeacher';
        if (FName && LName && Email && Password && Birthday) {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    FName: FName,
                    LName: LName,
                    Email: Email,
                    Password: Password,
                    Birthday: Birthday
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Your account has been created, now it needs to be validated by an admin.");
                    }
                    response.json();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log((err).message);
                })
        } else {
            alert('All fields are mandatory!');
        }
    }
}