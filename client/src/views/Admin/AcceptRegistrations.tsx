import { Button, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function AcceptRegistration() {

    return (
        <div>
            <Toolbar />
            <Grid container display='flex' justifyContent={'center'} alignItems='center'>
                <Grid item boxShadow={3} sx={{width: 3/4}} display='flex' justifyContent={'space-evenly'} alignItems='center' marginTop={1} padding={2}>
                    <Box>
                        <Typography variant="button" fontSize={16} fontWeight='500'>Request 1</Typography>
                    </Box>
                    <Box display={'inline'}>
                        <Typography variant="button" fontSize={16} fontWeight='500'>
                            Professor: &nbsp;
                        </Typography>
                        <Typography variant="button" fontSize={14} fontWeight={400}>
                            Ola
                        </Typography>
                    </Box>
                    <Box display={'inline'}>
                        <Typography variant="button" fontSize={16} fontWeight='500'>
                            Status: &nbsp;
                        </Typography>
                        <Typography variant="button" fontSize={14} fontWeight={400}>
                            Ola
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="contained">View Request</Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}