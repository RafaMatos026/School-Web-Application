import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { ListItemButton } from '@mui/material';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  child?: React.ReactNode;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const { child } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box
        marginTop={2}
        display='flex'
        alignItems='center'
        justifyContent='center'>
        <Avatar alt='Admin avatar' sx={{ width: 100, height: 100 }} />
      </Box>

      <Typography textAlign="center" fontWeight="bold" fontSize={26}>
        Admin Name
      </Typography>
      <Divider variant='middle' />
      <Container>
        <Typography variant='h6' component="div">
          Classes
        </Typography>
        <List>
          <Link to={'/admin/create-class'} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
              Create Class
            </ListItemButton>
          </Link>
          <Link to={'/admin/class-list'} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
              Class List
            </ListItemButton>
          </Link>
        </List>
      </Container>
      <Container>
        <Typography variant='h6' component="div">
          Student
        </Typography>
        <List>
          <Link to={'/admin/create-student'} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
              Create Student
            </ListItemButton>
          </Link>
          <Link to={'/admin/student-list'} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
              Student List
            </ListItemButton>
          </Link>
        </List>
      </Container>
      <Container>
        <Typography variant='h6' component="div">
          Teachers
        </Typography>
        <List>
          <Link to={'/admin/registration-requests'} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
              Registration Requests
            </ListItemButton>
          </Link>
          <Link to={'/admin/teacher-list'} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
              Teacher List
            </ListItemButton>
          </Link>
        </List>
      </Container>
    </div >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/*Barra de cima */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}

      >
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
          <Typography variant="h6" noWrap component="div">
            Homepage
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/** DRAWER FOR SMALL SCREENS */}
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

        {/** DRAWER FOR NORMAL */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {child}
      </Box>
    </Box>
  );
}
