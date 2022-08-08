import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

interface Props {
    open: boolean;
    title: string;
    children: React.ReactNode;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Modal(props: Props) {
    const { open, title, setOpen, children } = props;

    const handleClose = () => { }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle padding={0}>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography variant='h6' padding={1} component={'div'} sx={{ flexGrow: 1 }}>{title}</Typography>
                        <IconButton onClick={() => setOpen(false)}>
                            <CloseIcon fontSize='large'/>
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent dividers sx={{ padding: 3 }}>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    );
}