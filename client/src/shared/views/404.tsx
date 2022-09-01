import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { admin, student, teacher } from "../consts";

export default function Lost() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Box display={'flex'} flexDirection='column' justifyContent={'center'} alignItems='center' paddingY={3}>
            <Typography variant="h2">You seem somewhat lost...</Typography>
            <Button sx={{ marginTop: 2 }} size="large" variant="contained" onClick={() => goHome()}>Home</Button>
        </Box>
    )

    function goHome() {
        if (auth?.user?.AccountType === admin) {
            navigate('/admin');
        } else if (auth?.user?.AccountType === student) {
            navigate('/student');
        } else if (auth?.user?.AccountType === teacher) {
            navigate('/teacher');
        } else {
            auth?.signout();
            navigate('/login');
        }
    }
}