import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

const ShoppingCartItem = ({
  increaseQuantity,
  decreaseQuantity,
  product,
  removeProductFromCart,
}) => {
  const { image, name, price, quantity } = product;
  return (
    <Card
      sx={{
        display: 'flex',
        width: 300,
        marginBottom: '0.5rem',
        position: 'relative',
      }}
    >
      <IconButton
        size='small'
        onClick={() => removeProductFromCart(product)}
        aria-label='remove product'
        sx={{ position: 'absolute', right: '2px' }}
      >
        <DeleteIcon fontSize='small' />
      </IconButton>
      <CardMedia
        component='img'
        sx={{ width: 151 }}
        image={`./img/${image}.webp`}
        alt={`${name} image`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {name}
          </Typography>
          <Typography
            variant='subtitle1'
            component='div'
            sx={{ color: 'text.secondary' }}
          >
            {price}$
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            onClick={() => increaseQuantity(product.id)}
            aria-label='increase quantity'
          >
            <AddCircleOutlineIcon />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton
            onClick={() => decreaseQuantity(product.id)}
            aria-label='decrease quantity'
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

ShoppingCartItem.propTypes = {
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};
export default ShoppingCartItem;
