import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import { Card, CardContent, TextField, Typography, Button } from "@mui/material";
import Modal from '../../../shared/components/Modal';
import { useState } from "react";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AddSummary {
    Description: string;
    Date: Date;
    classId: string;
}

export default function AddSummary(props: Props) {
    const { open, setOpen } = props;
    const [summary, setSummary] = useState<AddSummary>();
    
    return (
        <Modal open={open} title={"Add Summary"} setOpen={setOpen}>

            <form>
                <Grid container spacing={1}>
                    <Grid xs={12} item>
                        <Typography>Summary:</Typography>
                        <TextField multiline rows={5} type={'text'} fullWidth />
                    </Grid>
                    <Grid xs={12} item textAlign={'center'} display='flex' marginTop={1}
                        justifyContent={'space-around'}>
                        <Button variant="contained" color="error" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button variant="contained">Add Summary</Button>
                    </Grid>
                </Grid>
            </form>
        </Modal>
    )

    function AddSummary() {

    }
}