import React from 'react';
import { useSelector } from 'react-redux'
import { AppBar, Toolbar, IconButton, Badge,  Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';

import logo from './assets/commerce.png';
import useStyles from './style';


const Navbar = () => {
    const classes = useStyles();
    const { count } = useSelector(state => state)

    return (
        <>
        
     <AppBar position="fixed" className={classes.appBar} color="inherit"></AppBar>    
     <Toolbar>
          <Typography  to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> E-commerce
          </Typography>
          <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          <div className={classes.grow} />
        
          <div className={classes.button}>
            
            <IconButton  to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={count} color="secondary">
             
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
    
        </Toolbar>
        </>
    )
}

export default Navbar
