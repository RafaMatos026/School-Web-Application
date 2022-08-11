import Modal from "../../../shared/components/Modal"
import { Button, ButtonGroup, TextField, Typography } from "@mui/material"

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubmitJustification(props: Props) {
    const { open, setOpen } = props;
    return (
        <div>
            <Modal open={open} title={'Submit Absence Justification'} setOpen={setOpen}>
                <TextField type='file' fullWidth sx={{ marginTop: 3 }} />
                <Typography variant="caption">Only PDF files will be accepted</Typography>
                <ButtonGroup sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 3 }}>
                    <Button variant="contained" color="error" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained" >Submit</Button>
                </ButtonGroup>
            </Modal>
        </div>

    )
}