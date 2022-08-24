import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import Radio from '@mui/material/Radio';
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from '@mui/material/Button';
import Modal from "../../../shared/components/Modal";
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { ISurvey } from '../../../shared/Interfaces/interfaces';

const baseUrl = "http://localhost:3001";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MarkPresence(props: Props) {
    const { _id } = useParams();
    const { open, setOpen } = props;
    const [value, setValue] = useState<string>('false');
    const user_id = useContext(AuthContext).user?._id;
    const [survey, setSurvey] = useState<ISurvey>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    }

    useEffect(() => {
        let url = baseUrl + '/presences/latestSurvey/' + _id;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setSurvey(data);
            })
            .catch((err) => {
                alert(err.message);
            })
    }, [])

    return (
        <>
            <Modal open={open} title={'Mark Presence'} setOpen={setOpen}>
                {!survey && (<h2>Theres no survey open...</h2>)}
                {survey && (
                    <Grid container spacing={1}>
                        <Grid item xs={12} textAlign='center'>
                            <Typography variant="h6">Attendance survey: { }</Typography>
                        </Grid>
                        <Grid item xs={12} textAlign='center' display={'flex'} justifyContent='center' alignItems={'center'}>
                            <Typography variant="h6">Presence: </Typography>
                            <FormControl sx={{ marginLeft: 2 }}>
                                <RadioGroup
                                    value={value}
                                    onChange={handleChange}
                                    row >
                                    <FormControlLabel value="true" control={<Radio />} label="Present" />
                                    <FormControlLabel value="false" control={<Radio />} label="Absent" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} textAlign={'center'} display='flex' justifyContent={'space-evenly'}>
                            <Button variant='contained' color='error' onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={() => MarkPresence()}>Submit</Button>
                        </Grid>
                    </Grid>
                )}
            </Modal>
        </>
    )

    function MarkPresence() {
        let url = baseUrl + "/presences/markPresence"
        fetch(url, {
            method: 'POST',

            body: JSON.stringify({
                _id: _id,
                studentId: user_id,
                Present: value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (response.ok) {
                    setOpen(false);
                    alert("Presence status saved!");
                }
            })
            .catch(err => {
                console.log(err.message);
                alert("Error: " + err.message);
            })
    }
}