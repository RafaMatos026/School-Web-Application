import { Grid, Card, CardContent, Typography, Button, Box, CardActions } from '@mui/material';

export default function ClassList() {
    return (
        <Box display={'flex'} justifyContent='center' alignItems={'center'} sx={{ width: '100%' }}>
            <Grid container columnSpacing={7} rowSpacing={3} display='flex' justifyContent={'center'} alignItems='center'>
                <Grid item>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography variant='h5' gutterBottom>Class 1</Typography>
                            <Typography variant='body1'>Head Teacher: Jon Doe</Typography>
                            <Typography variant='body1'>Subject: Math</Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                            <Button disableElevation variant='contained'>More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography variant='h5' gutterBottom>Class 1</Typography>
                            <Typography variant='body1'>Head Teacher: Jon Doe</Typography>
                            <Typography variant='body1'>Subject: Math</Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                            <Button disableElevation variant='contained'>More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography variant='h5' gutterBottom>Class 1</Typography>
                            <Typography variant='body1'>Head Teacher: Jon Doe</Typography>
                            <Typography variant='body1'>Subject: Math</Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                            <Button disableElevation variant='contained'>More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography variant='h5' gutterBottom>Class 1</Typography>
                            <Typography variant='body1'>Head Teacher: Jon Doe</Typography>
                            <Typography variant='body1'>Subject: Math</Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                            <Button disableElevation variant='contained'>More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography variant='h5' gutterBottom>Class 1</Typography>
                            <Typography variant='body1'>Head Teacher: Jon Doe</Typography>
                            <Typography variant='body1'>Subject: Math</Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                            <Button disableElevation variant='contained'>More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant='outlined'>
                        <CardContent>
                            <Typography variant='h5' gutterBottom>Class 1</Typography>
                            <Typography variant='body1'>Head Teacher: Jon Doe</Typography>
                            <Typography variant='body1'>Subject: Math</Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                            <Button disableElevation variant='contained'>More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}