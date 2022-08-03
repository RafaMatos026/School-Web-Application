import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Avatar alt='Admin avatar'  sx={{width: 100, height: 100}}/>
      <Typography textAlign="center" fontWeight="bold" fontSize={26}>
        Admin Name
      </Typography>
      <Divider variant='middle' />
      <Container>
        <Typography variant='h6' component="div">
          Classes
        </Typography>
        <List>
          <ListItemButton>
            Create Class
          </ListItemButton>
          <ListItemButton>
            Class List
          </ListItemButton>
        </List>
      </Container>
      <Container>
        <Typography variant='h6' component="div">
          Students
        </Typography>
        <List>
          <ListItemButton>
            Create Student
          </ListItemButton>
          <ListItemButton>
            Student List
          </ListItemButton>
        </List>
      </Container>
      <Container>
        <Typography variant='h6' component="div">
          Teachers
        </Typography>
        <List>
          <ListItemButton>
            Accept Registration
          </ListItemButton>
          <ListItemButton>
            Teacher List
          </ListItemButton>
        </List>
      </Container>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/** BARRA DE CIMA */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        elevation={0}
      >
        <Toolbar>
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
    </Box>
  );
}