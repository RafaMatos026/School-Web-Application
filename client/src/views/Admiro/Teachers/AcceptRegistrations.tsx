import { Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";

export default function AcceptRegistration() {

    return (
        <>
            <Box display={'flex'} flexDirection='column' justifyContent={'center'} alignItems='center'>
                <Box marginTop={2} border={1} padding={1.5} width={'70%'} display={'flex'} justifyContent='space-between' alignItems={'center'}>
                    <Typography>Request 1</Typography>
                    <Typography>Request 1</Typography>
                    <Typography>Request 1</Typography>
                    <Link to={'/request1'} style={{textDecoration: 'none'}}>
                        <Button sx={{textDecoration: 'none'}} variant="contained">View Request</Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}