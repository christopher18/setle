import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './navmenu.css'; // Importing the CSS file

import icon from '../../assets/images/icon_transparent.ico'; // Importing the image file

function NavigationMenu() {
    return (
        <AppBar position="static" className="appBar">
            <Toolbar className="appBar">
                <img src={icon} alt="Icon" className="icon small" /> {/* Displaying the image */}
                <Typography variant="h6" className="set-game-title title">
                    Notset
                </Typography>
                {/* <Button color="inherit" component={Link} to="/" className="navButton">
                    Home
                </Button> */}
                <Button color="inherit" component={Link} to="/puzzle" className="navButton">
                    Puzzle
                </Button>
                <Button color="inherit" component={Link} to="/game" className="navButton">
                    Game
                </Button>
                {/* Add more buttons for additional links/screens */}
            </Toolbar>
        </AppBar>
    );
}

export default NavigationMenu;
