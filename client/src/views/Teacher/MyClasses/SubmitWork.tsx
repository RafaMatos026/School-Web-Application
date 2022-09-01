import Modal from "../../../shared/components/Modal"
import { Button, ButtonGroup, TextField } from "@mui/material"
import Typography from '@mui/material/Typography';
import React, { ChangeEvent, useContext, useState } from "react";
import { BASE_URL, CLOUDNARY_BASE_URL } from "../../../shared/consts";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubmitWork(props: Props) {
    const { _id } = useParams();
    const { open, setOpen } = props;
    const { user } = useContext(AuthContext);
    const [WorkName, setWorkName] = useState("");
    const [Description, setDescription] = useState("");
    const [DueDate, setDueDate] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [file, setFile] = React.useState<File>();

    const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) {
            return;
        }

        const file = e.target.files[0];

        if (file) {
            if (file.type !== 'application/pdf') {
                alert('File type must be pdf!')
                e.target.value = '';
                return;
            }
            setFile(file);
        }
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
                <TextField type='file' fullWidth sx={{ marginTop: 3 }} onChange={handleUpload} />
                <Typography variant="caption">Only PDF or JPEG/PNG files will be accepted</Typography>
                <ButtonGroup sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 3 }}>
                    <Button variant="contained" color="error" onClick={() => CloseModal()}>Cancel</Button>
                    <Button variant="contained" onClick={() => CreateWork()}>Submit</Button>
                </ButtonGroup>
            </Modal>
        </div>
    )

    function CreateWork() {
        if (file && WorkName && DueDate && user) {
            uploadCloudnary()
            let url = BASE_URL + '/works/create';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    WorkName: WorkName,
                    Description: Description,
                    DueDate: DueDate,
                    AddedDate: Date.now(),
                    classId: _id,
                    fileUrl: fileUrl,
                    userId: user._id,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                    if (response.ok) {
                        alert('Work has been created successfully!');
                    } else {
                        alert('Work has not been created!');
                    }
                    return response.json();
                })
                .catch((error) => {
                    console.log(error.message);
                })
            setDescription("");
            setWorkName("");
            setDueDate("");
            setFileUrl("");
            setFile(undefined);
            setOpen(false)
        }
    }

    function uploadCloudnary() {
        if (file) {
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', 'jxv3ns2u');
            data.append('cloud_name', 'dqcqfn8p8');
            let url = CLOUDNARY_BASE_URL;
            fetch(url, {
                method: 'POST',
                body: data,
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    setFileUrl(data.url);
                })
                .catch((error) => {
                    console.log('Error: ' + (error.message));
                })
        }
    }

    function CloseModal() {
        setDescription("");
        setWorkName("");
        setDueDate("");
        setFileUrl("");
        setFile(undefined);
        setOpen(false)
    }
}