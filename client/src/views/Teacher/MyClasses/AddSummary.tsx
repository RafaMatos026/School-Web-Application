import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import { Card, CardContent, TextField, Typography, Button } from "@mui/material";

export default function AddSummary() {
    return (
        <Box marginTop={3}>
            <Card sx={{ maxWidth: 500, margin: '0 auto', paddingInline: 1, paddingTop: 1 }} variant='outlined'>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography>Summary:</Typography>
                                <TextField multiline rows={5} type={'text'} fullWidth />
                            </Grid>
                            <Grid xs={12} item textAlign={'center'} display= 'flex' marginTop={1}
                            justifyContent={'space-around'}>
                                <Button variant="contained" color="error">Cancel</Button>
                                <Button variant="contained">Add Summary</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Box>
    )
}