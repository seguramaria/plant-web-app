import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const Product = ({ handleClose, product, open }) => {
  const { image, price, description, name } = product;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Stack
          sx={{
            maxWidth: 600,
            display: 'flex',
            flexDirection: 'row',
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
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                {description}
              </Typography>
              <Typography variant='h6'>{price}$</Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>
                Add to cart
              </Button>
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
};

export default Product;
