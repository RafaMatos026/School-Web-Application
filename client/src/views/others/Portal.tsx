import { AppBar, CssBaseline, Grid, Toolbar } from "@material-ui/core";
import { Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const img = "https://i.postimg.cc/xCH6ng8z/Guy-computer.png";

export default function Portal(props: Props) {
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                School Web Application
            </Typography>
            <Divider />
            <List>

                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={'error'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box display={'flex'} justifyContent='center'>
                <CssBaseline />
                <AppBar position="fixed" component={'nav'}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            School Web Application
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button sx={{ color: '#fff' }} onClick={() => navigate('/register')}>Register</Button>
                            <Button sx={{ color: '#fff' }} onClick={() => navigate('/login')}>Login</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />
                    <Grid container spacing={1} direction='column' justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={12}>
                            <Typography variant="h2" textAlign={'center'}>
                                Welcome to the new school plataform!
                            </Typography>
                            <Typography textAlign={'center'} variant="h4">
                                Easier than ever to be in school.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box component={'img'} alt='Guy on a computer' src={img} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}