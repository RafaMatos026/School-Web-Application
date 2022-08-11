import Modal from "../../../shared/components/Modal"
import { Button, ButtonGroup, TextField } from "@mui/material"
import Typography from '@mui/material/Typography';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubmitWork(props: Props) {
    const { open, setOpen } = props;
    return (
        <div>
            <Modal open={open} title={'Submit Class Work'} setOpen={setOpen}>
                <TextField type='file' fullWidth sx={{ marginTop: 3 }} />
                <Typography variant="caption">Only PDF or JPEG/PNG files will be accepted</Typography>
                <ButtonGroup sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 3 }}>
                    <Button variant="contained" color="error" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="contained" >Submit</Button>
                </ButtonGroup>
            </Modal>
        </div>
    )
}