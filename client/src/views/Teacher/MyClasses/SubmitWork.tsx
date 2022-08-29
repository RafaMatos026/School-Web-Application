import Modal from "../../../shared/components/Modal"
import { Button, ButtonGroup, TextField } from "@mui/material"
import Typography from '@mui/material/Typography';
import React, { useState } from "react";
import { CLOUDNARY_BASE_URL } from "../../../shared/consts";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubmitWork(props: Props) {
    const { open, setOpen } = props;
    const [WorkName, setWorkName] = useState("");
    const [Description, setDescription] = useState("");
    const [DueDate, setDueDate] = useState("");
    const [url, setUrl] = useState("");
    const [file, setFile] = React.useState<File>();

    const handleFileUpload = async (element: HTMLInputElement) => {
        const file = element.files;
        if (!file) {
            return
        }
        return file[0];
    }

    return (
        <div>
            <Modal open={open} title={'Submit Class Work'} setOpen={setOpen}>
                <Typography textAlign={'start'}>Work Name</Typography>
                <TextField sx={{ width: '100%' }} value={WorkName} onChange={(e) => setWorkName(e.target.value)} size="small" type='text' variant="outlined" />
                <Typography textAlign={'start'} sx={{ marginTop: 3 }}>Description</Typography>
                <TextField sx={{ width: '100%' }} multiline rows={3} value={Description} onChange={(e) => setDescription(e.target.value)} size="small" type='text' variant="outlined" />
                <Typography textAlign={'start'} sx={{ marginTop: 3 }}>Due Date</Typography>
                <TextField sx={{ width: '100%' }} value={DueDate} onChange={(e) => setDueDate(e.target.value)} size="small" type='date' variant="outlined" />
                <TextField type='file' fullWidth sx={{ marginTop: 3 }} value={file} />
                <Typography variant="caption">Only PDF or JPEG/PNG files will be accepted</Typography>
                <ButtonGroup sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 3 }}>
                    <Button variant="contained" color="error" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={() => CreateWork()}>Submit</Button>
                </ButtonGroup>
            </Modal>
        </div>
    )

    function CreateWork() {
        if (file && WorkName && DueDate) {
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', 'jxv3ns2u');
            data.append('cloud_name', 'dqcqfn8p8');
            let url = CLOUDNARY_BASE_URL + '/image/upload'
            fetch('', {
                method: 'POST',
                body: data,
            })
                .then((response) => {
                    console.log(response);
                    response.json();
                })
                .then((data) => {
                    console.log(data);
                    //setUrl(data.url);
                })
                .catch((error) => {
                    console.log('Error: ' + (error.message));
                })
        }
    }
}