import React from 'react'
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/Card';

import { useDispatch } from 'react-redux'

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import { incrementCount } from '../../../actions';

const Product = ({ product  }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
      return (
      <div>
              <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
        <div className={classes.cardContent}>
    <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography  variant="h5" component="h2">
            {product.price}
          </Typography>
    </div>
          <Typography variant="body2" color="textSecondary" component="p">
           {product.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    <CardActions disableSpacing className={classes.cardActions}>

    <button onClick={() => dispatch(incrementCount())}>

    <AddShoppingCart />
</button>
</CardActions>
    </Card>
        </div>
    )
}

export default Product
