import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import { Card, CardContent, TextField, Typography, Button } from "@mui/material";
import Modal from '../../../shared/components/Modal';
import { useState } from "react";
import { useParams } from "react-router-dom";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const baseUrl = "http://localhost:3001";

export default function AddSummary(props: Props) {
    const { id } = useParams();
    const { open, setOpen } = props;
    const [Description, setDescription] = useState("");

    return (
        <Modal open={open} title={"Add Summary"} setOpen={setOpen}>

            <form>
                <Grid container spacing={1}>
                    <Grid xs={12} item>
                        <Typography>Summary:</Typography>
                        <TextField multiline value={Description} onChange={(e) => setDescription(e.target.value)} rows={5} type={'text'} fullWidth />
                    </Grid>
                    <Grid xs={12} item textAlign={'center'} display='flex' marginTop={1}
                        justifyContent={'space-around'}>
                        <Button variant="contained" color="error" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button variant="contained" onClick={() => AddSummary()}>Add Summary</Button>
                    </Grid>
                </Grid>
            </form>
        </Modal>
    )

    function AddSummary() {
        let url = baseUrl + "/summaries/create";
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                Description: Description,
                classId: id,
                Date: Date.now()
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('New summary added to the class');
                    setOpen(false);
                }
                response.json();
            })
            .catch(err => {
                console.log(err);
                alert("Error:" + err.message);
            })
    }
}