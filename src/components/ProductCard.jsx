import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import PropTypes from 'prop-types';
import ProductDetail from './ProductDetail';
import { useState } from 'react';

const Product = ({ product }) => {
  const [open, setOpen] = useState(false);

  const { image, price, name } = product;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={handleClickOpen}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='350'
            image={`./img/${image}.webp`}
            alt={`${name} image`}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {name}
            </Typography>

            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              {price}$
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Add to cart
          </Button>
        </CardActions>
      </Card>
      <ProductDetail product={product} open={open} handleClose={handleClose} />
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
