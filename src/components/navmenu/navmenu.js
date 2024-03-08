import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useState } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// npm install @mui/material @emotion/react @emotion/styled
import { Link } from 'react-router-dom';
import './navmenu.css'; // Importing the CSS file

import icon from '../../assets/images/icon_transparent.ico'; // Importing the image file

function NavigationMenu() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    const navigateToHome = () => {
        // go to home page
        window.location.href = '/';
    }

    return (
        <AppBar position="static" className="appBar">
            <Toolbar className="appBar">
                <img src={icon} alt="Icon" className="icon small" onClick={navigateToHome}/> {/* Displaying the image */}
                <Typography variant="h6" className="set-game-title title">
                    Notset
                </Typography>
                {/* <Button color="inherit" component={Link} to="/" className="navButton">
                    Home
                </Button> */}
                {/* <Button color="inherit" component={Link} to="/puzzle" className="navButton">
                    Puzzle
                </Button>
                <Button color="inherit" component={Link} to="/game" className="navButton">
                    Game
                </Button> */}
                {/* Add more buttons for additional links/screens */}
                {/* hamburger menu button */}
                <button className={`hamburger ${isOpen ? 'is-active' : ''}`} onClick={togglePanel}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div style={{
                    position: 'fixed',
                    top: '0',
                    right: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#4A148C',
                    boxShadow: '0 0 10px black',
                    overflowX: 'hidden',
                    width: isOpen ? '250px' : '0',
                    height: '100%',
                    transition: '0.3s',
                    paddingTop: '60px',
                    paddingLeft: isOpen ? '10px' : '0',
                    paddingRight: isOpen ? '10px' : '0',
                    // Add more styling as needed
                }} 
                >
                    <Button color="inherit" component={Link} to="/" className="navButton" onClick={togglePanel}>
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/puzzle" className="navButton" onClick={togglePanel}>
                        Puzzle
                    </Button>
                    <Button color="inherit" component={Link} to="/game" className="navButton" onClick={togglePanel}>
                        Game
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationMenu;
