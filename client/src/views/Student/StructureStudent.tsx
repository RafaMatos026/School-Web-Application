import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../../auth/AuthContext';
import { useContext } from 'react';
import { BASE_URL } from '../../shared/consts';


const drawerWidth = 240;

interface Props {
  window?: () => Window;
  child?: React.ReactNode;
  page_title?: string;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const { child } = props;
  const { page_title } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const user = useContext(AuthContext).user;
  const auth = useContext(AuthContext);
  const [pic, setPic] = React.useState("");
  const [FName, setFName] = React.useState("");
  const [LName, setLName] = React.useState("");

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    let url = BASE_URL + '/users/getProfilePic/' + user?._id;
    fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPic(data.ProfilePicture);
        setFName(data.FName);
        setLName(data.LName);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }, [])

  const drawer = (
    <div>
      <Box
        marginTop={2}
        display='flex'
        alignItems='center'
        justifyContent='center'>
        {pic === "" ? <Avatar sx={{ width: 100, height: 100, fontSize: 35 }}>{FName.slice(0, 1) + LName.slice(0, 1)}</Avatar> : <Avatar alt='profile picture' src={pic} />}
      </Box>

      <Typography textAlign="center" fontWeight="bold" fontSize={22}>
        {user?.FName + ' ' + user?.LName}
      </Typography>
      <Divider variant='middle' />
      <Container>
        <Typography variant='h6' component="div">
          Classes
        </Typography>
        <List>
          <Link to={'/student/myClasses'} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
              My Classes
            </ListItemButton>
          </Link>
        </List>
      </Container>
    </div>
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
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              color='inherit'
              aria-label='go back'
              edge="start"
              onClick={() => navigate(-1)}>
              <ArrowBackIcon />
            </IconButton>
            <Typography marginLeft={2} variant="h6" noWrap component="div">
              {page_title}
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0.05 }} display='flex' justifyContent={'space-evenly'}>
            <IconButton color='inherit' aria-label='settings' edge='end' onClick={() => navigate('/student/settings/' + user?._id)}>
              <SettingsIcon />
            </IconButton>
            <IconButton color='inherit' aria-label='settings' edge='end' onClick={() => logout()}>
              <LogoutIcon />
            </IconButton>
          </Box>
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

  function logout(): void {
    auth.signout();
    navigate('/login');
  }
}
