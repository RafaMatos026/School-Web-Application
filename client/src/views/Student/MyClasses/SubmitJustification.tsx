import Modal from "../../../shared/components/Modal"
import { Button, ButtonGroup, TextField, Typography } from "@mui/material"
import { useParams } from "react-router-dom";
import { useState, useContext, ChangeEvent } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import { BASE_URL, CLOUDNARY_BASE_URL } from "../../../shared/consts";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubmitJustification(props: Props) {
    const { open, setOpen } = props;
    const { _id } = useParams();
    const { user } = useContext(AuthContext);
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
        <div>
            <Modal open={open} title={'Submit Absence Justification'} setOpen={setOpen}>
                <TextField onChange={handleUpload} type='file' fullWidth sx={{ marginTop: 3 }} />
                <Typography variant="caption">Only PDF/PNG/JPEG files will be accepted!</Typography>
                <ButtonGroup sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 3 }}>
                    <Button variant="contained" color="error" onClick={() => CloseModal()}>Cancel</Button>
                    <Button variant="contained" onClick={() => CreateJustification()}>Submit</Button>
                </ButtonGroup>
            </Modal>
        </div>
    )

    function CreateJustification() {
        if (file && _id && user) {
            uploadCloudnary();
            let url = BASE_URL + '/absence-justificatio/create';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    classId: _id,
                    studentId: user._id,
                    DateAdded: Date.now(),
                    fileUrl: fileUrl,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                    if (response.ok) {
                        alert('Absence justification has been submitted successfully!');
                    } else {
                        alert('Absen justification hasn´t been submitted!');
                    }
                    return response.json();
                })
                .catch((error) => {
                    console.log(error.message);
                })
            setFileUrl("");
            setFile(undefined);
            setOpen(false)
        }
    }

    function uploadCloudnary() {
        if (file) {
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', 'qmiagvpx');
            data.append('cloud_name', 'dqcqfn8p8');
            let url = CLOUDNARY_BASE_URL;
            fetch(url, {
                method: 'POST',
                body: data,
            })
                .then((response) => {
                    console.log(response);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    setFileUrl(data.url);
                })
                .catch((error) => {
                    console.log('Error: ' + (error.message));
                })
        }
    }

    function CloseModal() {
        setFileUrl("");
        setFile(undefined);
        setOpen(false)
    }
}