import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';
import Modal from "../../../shared/components/Modal";
import { useParams } from 'react-router-dom';

const baseUrl = "http://localhost:3001";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MarkPresence(props: Props) {
    const { _id } = useParams();
    const { open, setOpen } = props;
    const [value, setValue] = useState<string>('false');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    }

    return (
        <div>
            <Modal open={open} title={'Mark Presence'} setOpen={setOpen}>
                <form>
                    <Grid container spacing={1}>
                        <Grid item xs={12} textAlign='center'>
                            <Typography variant="h6">Class: {'math'}</Typography>
                        </Grid>
                        <Grid item xs={12} textAlign='center'>
                            <Typography variant="h6">Date: {'9/08/2022'}</Typography>
                        </Grid>
                        <Grid item xs={12} textAlign='center'>
                            <Typography variant="h6">Time: {'14:57'}</Typography>
                        </Grid>
                        <Grid item xs={12} textAlign='center'>
                            <Typography variant="h6">Presence: </Typography>
                            <FormControl>
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
                </form>
            </Modal>
        </div>
    )

    function MarkPresence() {
        let url = baseUrl + "/presences/create"
        fetch(url, {
            method: 'POST',

            body: JSON.stringify({
                classId: _id,
                studentId: '62fbc2ec94f87c56ee847d0b', //change here after to the current user _id;
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