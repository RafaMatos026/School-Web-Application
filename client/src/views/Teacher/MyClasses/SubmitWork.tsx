import Modal from "../../../shared/components/Modal"
import { Button, ButtonGroup, TextField } from "@mui/material"
import Typography from '@mui/material/Typography';
import React, { useState } from "react";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubmitWork(props: Props) {
    const { open, setOpen } = props;
    const [WorkName, setWorkName] = useState("");
    const [Description, setDescription] = useState("");
    const [DueDate, setDueDate] = useState("");
    const [fileselected, setFileselected] = React.useState<File>();

    const uploadFile = function (e: React.ChangeEvent) {
        if (fileselected) {
            const formdata = new FormData();
            formdata.append('file', fileselected, fileselected.name);
        }
    };

    return (
        <div>
            <Modal open={open} title={'Submit Class Work'} setOpen={setOpen}>
                <Typography textAlign={'start'}>Last Name</Typography>
                <TextField sx={{ width: '100%' }} value={WorkName} onChange={(e) => setWorkName(e.target.value)} size="small" type='text' variant="outlined" />
                <Typography textAlign={'start'} sx={{ marginTop: 3 }}>Description</Typography>
                <TextField sx={{ width: '100%' }} multiline rows={3} value={Description} onChange={(e) => setDescription(e.target.value)} size="small" type='text' variant="outlined" />
                <Typography textAlign={'start'} sx={{ marginTop: 3 }}>Due Date</Typography>
                <TextField sx={{ width: '100%' }} value={DueDate} onChange={(e) => setDueDate(e.target.value)} size="small" type='date' variant="outlined" />
                <TextField type='file' onChange={uploadFile} fullWidth sx={{ marginTop: 3 }} />
                <Typography variant="caption">Only PDF or JPEG/PNG files will be accepted</Typography>
                <ButtonGroup sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 3 }}>
                    <Button variant="contained" color="error" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained">Submit</Button>
                </ButtonGroup>
            </Modal>
        </div>
    )
}