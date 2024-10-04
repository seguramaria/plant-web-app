import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';

const Footer = ({ icon, name }) => {
  return (
    <Box
      component='footer'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#373330',
        color: 'white',
        textAlign: 'center',
        padding: '16px',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant='body2'>
        © {new Date().getFullYear()} {name}
      </Typography>
      {icon && (
        <Icon
          className='material-icons-outlined'
          color='inherit'
          sx={{ marginLeft: '0.5rem' }}
        >
          {icon}
        </Icon>
      )}
    </Box>
  );
};

Footer.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Footer;
