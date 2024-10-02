import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import PropTypes from 'prop-types';
import ProductDetail from './ProductDetail';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from 'react';

const Product = ({ product, addToCart, quantity, removeProductFromCart }) => {
  const [open, setOpen] = useState(false);
  const { image, name, price } = product;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component='img'
            height='350'
            image={`./img/${image}.webp`}
            alt={`${name} image`}
          />
          <CardContent sx={{ paddingBottom: '0' }}>
            <Typography gutterBottom variant='h5' component='div'>
              {name}
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              {price}$
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {quantity > 0 ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={() => addToCart(product)}>
                <AddCircleOutlineIcon />
              </IconButton>
              <Typography>{quantity}</Typography>
              <IconButton onClick={() => removeProductFromCart(product)}>
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Box>
          ) : (
            <Button
              size='small'
              color='success'
              onClick={() => addToCart(product)}
            >
              Add to cart
            </Button>
          )}
        </CardActions>
      </Card>
      <ProductDetail
        product={product}
        open={open}
        handleClose={handleClose}
        addToCart={addToCart}
        quantity={quantity}
      />
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

export default Product;
