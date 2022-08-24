import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { admin, student } from "../../shared/consts";

export default function AccessDenied() {
    const user_role = useContext(AuthContext).user?.AccountType;
    const navigate = useNavigate();

    return (
        <>
            <Box marginTop={3} display={'flex'} justifyContent='center' alignItems={'center'} flexDirection='column'>
                <Typography variant="h5">Access Denied! You don't have permission to be here...</Typography>
                <Button sx={{ marginTop: '1rem' }} variant="contained" onClick={() => Home()}>Homepage</Button>
            </Box>
        </>
    )

    function Home() {
        if (user_role === admin) {
            navigate('/admin');
        } else if (user_role === student) {
            navigate('/student');
        } else {
            navigate('/teacher');
        }
    }
}