import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import useMediaQuery from '@mui/material/useMediaQuery';

const Product = ({
  handleClose,
  removeProductFromCart,
  product,
  open,
  addToCart,
  quantity,
}) => {
  const { image, price, description, name } = product;
  const isDesktop = useMediaQuery('(min-width:600px)');
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Stack
          sx={{
            maxWidth: 600,
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <CardMedia
            component='img'
            height='350'
            image={`./img/${image}.webp`}
            alt={`${name} image`}
          />
          <Stack>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {name}
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: 'text.secondary', textAlign: 'justify' }}
              >
                {description}
              </Typography>
              <Typography variant='h6'>{price}$</Typography>
            </CardContent>
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
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

Product.propTypes = {
  handleClose: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,

  removeProductFromCart: PropTypes.func.isRequired,
};

export default Product;
