import React from 'react';
import {Grid} from '@material-ui/core';
import useStyles from './styles';

import Products from './Products/Products';
const products = [ 
    { id:1,name:'shoes',description:'Running shoes',price:'$5'},
    { id:2,name:'Makbook',description:'Apple MAKBOOK ',price:'$10'},
  

];
 const Product = () => { 
    const classes = useStyles(); 
    return(
     
    <main className={classes.content}>
      <div className={classes.toolbar} />
    <Grid container justify="center" spacing={4}>
{ products.map((product) => (
  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Products product={product} />
      </Grid>
))}
    </Grid>
</main>
 )
 
}
export default Product;