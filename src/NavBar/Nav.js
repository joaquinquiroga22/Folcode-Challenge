import React from "react";
import { Link } from "react-router-dom";
//Material-ui
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, MenuList } from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
   
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function Nav(){
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

return(
<div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          
          <Typography variant="h6" noWrap className={classes.title}>
            <Button variant = "h6" noWrap color = "inherit" href = "/"> 
            The Movie Folcode
            </Button>
          </Typography>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
     </main> 
     <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <MenuList >
          {['Peliculas Populares'].map((text, index,) => (
            <ListItem button key={text}>
                <Link to ="/getPopular"> 
              <ListItemIcon>{index % 2 === 0 ? <ChevronLeftIcon /> : <ChevronLeftIcon />}</ListItemIcon>
              </Link>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </MenuList>
        
        <MenuList>
          {['Estrenos'].map((text, index) => (
            <ListItem button key={text}>
                <Link to ="/getUpComing">
              <ListItemIcon>{index % 2 === 0 ? <ChevronLeftIcon  /> : <ChevronLeftIcon />}</ListItemIcon>
              </Link>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </MenuList>
        <MenuList >
          {['Pelicular Mejor Valoradas'].map((text, index,) => (
            <ListItem button key={text}>
                <Link to ="/getTopRated"> 
              <ListItemIcon>{index % 2 === 0 ? <ChevronLeftIcon /> : <ChevronLeftIcon />}</ListItemIcon>
              </Link>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </MenuList>
        <Divider />
      </Drawer>
     </div>
)
}