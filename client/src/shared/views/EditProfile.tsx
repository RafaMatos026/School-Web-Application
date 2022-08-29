import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { BASE_URL } from "../consts";

export default function EditProfile() {
    const user = useContext(AuthContext).user;
    const [loading, setLoading] = useState(true);
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Birthday, setBirthday] = useState("");

    useEffect(() => {
        let url = BASE_URL + "/users/getUser/" + user?._id;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
            })
    })

    return (
        <Box>
            {loading && (<h2>Loading...</h2>)}
            {!loading && (
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
                                <Grid xs={12} item textAlign={'center'}>
                                    <Button variant="contained" onClick={() => SendUpdate()}>Save</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            )}
        </Box>
    )

    function SendUpdate() {
        let url = BASE_URL + '/users/updateUser/' + user?._id;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
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