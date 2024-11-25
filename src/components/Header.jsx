import { useState } from 'react';
import { AppBar, Toolbar, Drawer, IconButton, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/invoices">
                    <ListItemText primary="Invoices" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/about">
                    <ListItemText primary="About" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/contact">
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </Box>
    );

    return ( 
        <>
            <AppBar color="secondary" position="static">
                <Toolbar style={{ paddingBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="Hack_Logo-removebg-preview.png" alt="logo" style={{ width: 200, marginLeft: -30 }} />
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>
        </>
    );
};

export default Header;
