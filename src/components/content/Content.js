import React, {useState, useEffect} from 'react'
import axios from 'axios';
import useStyles from './styles';
import Product from './product/Product'
import {Grid} from '@material-ui/core';
function Content() {
    const [products, setProducts] = useState([]);
  const commerce =   axios.get('http://localhost:3000/Product');
    const classes = useStyles();

    useEffect(() => {
        commerce
        .then(response => {
               setProducts(response.data);
        })
        .catch(console.error)
    })
    return (
       
        <div style={{ margin: 100 }} >
            <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
            {  products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        <Product product={product} /> 
                    </Grid>
            ))}
            </Grid>
        </main>
        </div>
    )
}

export default Content
