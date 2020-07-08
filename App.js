import React from 'react';
import { Button, Typography } from "@material-ui/core";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu, MenuItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import theme from "./theme"
import { positions } from '@material-ui/system';


/**
 * Has the styling solution used for Material-UI components
 * */
const useStyles = makeStyles({
    //Changes the alignment and spaces
    root: {
        flexGrow: 1,
        width: '25ch',
        margin: "auto",
        top: 40,
    },
    textFields: { top:40 },
    menuButton: { marginRight: 2 },
    buttonStyles: {  color: 'green' },
    title: { flexGrow: 1 },
});

/**
 * Runs the app. Contains the HTML elements.
 * */
function App() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };

  return (
    <div className="App">
        <AppBar color="secondary" position="static">
            <Toolbar>
                <IconButton edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-controls={"simple-menu"}
                            aria-haspopup={"true"}
                            onClick={handleClick}
                            aria-label="menu">
                    <MenuIcon />
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Home</MenuItem>
                        <MenuItem onClick={handleClose}>About Us</MenuItem>
                        <MenuItem onClick={handleClose}>Contact</MenuItem>
                    </Menu>
                </IconButton>
                <Typography variant="h6" className={classes.title} align='center'>
                    Calisthantics
                </Typography>
            </Toolbar>
        </AppBar>

        <form className={classes.root} noValidate autoComplete="off" >
            <TextField className={classes.root} id="username" label="Username" variant="outlined" />
            <TextField className={classes.root} id="pw" label="Password" variant="outlined" />
            <Button className={classes.root} color={"secondary"} >
                Login
            </Button>
        </form>
    </div>
  );
}

export default App;
