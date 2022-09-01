import Modal from "../../../shared/components/Modal"
import { Button, ButtonGroup, TextField } from "@mui/material"
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import { ChangeEvent, useContext, useState } from "react";
import { BASE_URL, CLOUDNARY_BASE_URL } from "../../../shared/consts";
import { AuthContext } from "../../../auth/AuthContext";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubmitEvaluation(props: Props) {
    const { _id } = useParams();
    const { open, setOpen } = props;
    const { user } = useContext(AuthContext);
    const [EvaluationName, setEvaluationName] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [file, setFile] = useState<File>();

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
        <Modal open={open} title={'Submit Class Work'} setOpen={setOpen}>
            <Typography textAlign={'start'}>Evaluation Name</Typography>
            <TextField sx={{ width: '100%' }} value={EvaluationName} onChange={(e) => setEvaluationName(e.target.value)} size="small" type='text' variant="outlined" />
            <TextField type='file' onChange={handleUpload} fullWidth sx={{ marginTop: 3 }} />
            <Typography variant="caption">Only PDF's will be accepted</Typography>
            <ButtonGroup sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 3 }}>
                <Button variant="contained" color="error" onClick={() => CloseModal()}>Cancel</Button>
                <Button variant="contained" onClick={() => CreateEvaluation()}>Submit</Button>
            </ButtonGroup>
        </Modal>
    )

    //fileUrl gets empty sometimes, i need to work on that
    function CreateEvaluation() {
        if (file && EvaluationName && user) {
            uploadCloudnary()
            let url = BASE_URL + '/evaluation/create';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    EvaluationName: EvaluationName,
                    DateAdded: Date.now(),
                    classId: _id,
                    fileUrl: fileUrl,
                    teacherId: user._id,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                    if (response.ok) {
                        alert('Evaluation has been uploaded successfully!');
                    } else {
                        alert('Something went wrong! Evaluation has not been uploaded...');
                    }
                    return response.json();
                })
                .catch((error) => {
                    console.log(error.message);
                })

            setEvaluationName("");
            setFileUrl("");
            setFile(undefined);
            setOpen(false)
        }
    }

    function uploadCloudnary() {
        if (file) {
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', 'fknnjzqu');
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
        setEvaluationName("");
        setFileUrl("");
        setFile(undefined);
        setOpen(false)
    }
}