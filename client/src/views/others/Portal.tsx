import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Portal() {
    const navigate = useNavigate();

    return (
        <>
            <Box>
                <Typography>Welcome to the school web application!</Typography>
                <Button variant="contained" onClick={() => navigate('/register')}>First time?</Button>
                <Button variant="contained" onClick={() => navigate('/login')}>Already have an account?</Button>
            </Box>
        </>
    )
}