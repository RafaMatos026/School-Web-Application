import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";

export default function AcceptRegistration() {

    return (
        <Box width={'100%'}>
            <Grid lg={12} container rowSpacing={2} display={'flex'} justifyContent='center'
            alignItems={'center'}>
                <Grid lg={8} item>
                    <Box width={'100%'} minWidth={'450px'} paddingX={1} paddingY={1} border={1} display='flex' justifyContent={'space-around'} alignItems='center'>
                        <Typography>Request 1</Typography>
                        <Typography>Name: Jon Doe</Typography>
                        <Typography>Status: Pendent</Typography>
                        <Button sx={{
                            width: '15%',
                            fontSize: '12px'
                        }} size='small' variant='contained'>View Request</Button>
                    </Box>
                </Grid>
                <Grid lg={8} item>
                    <Box width={'100%'} minWidth={'450px'} paddingX={1} paddingY={1} border={1} display='flex' justifyContent={'space-around'} alignItems='center'>
                        <Typography>Request 1</Typography>
                        <Typography>Name: Jon Doe</Typography>
                        <Typography>Status: Pendent</Typography>
                        <Button sx={{
                            width: '15%',
                            fontSize: '12px'
                        }} size='small' variant='contained'>View Request</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}