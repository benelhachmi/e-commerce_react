import React from 'react';
import { AppBar, Toolbar, IconButton, Badge,  Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/commerce.png';
import useStyles from './style';


const Navbar = () => {
    const classes = useStyles();

    return (
        <>
        
     <AppBar position="fixed" className={classes.appBar} color="inherit"></AppBar>    
     <Toolbar>
          <Typography  to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Commerce.js
          </Typography>
          <div className={classes.grow} />
        
          <div className={classes.button}>
            <IconButton  to="/cart" aria-label="Show cart items" color="inherit">
              <Badge color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
    
        </Toolbar>
        </>
    )
}

export default Navbar
