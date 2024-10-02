import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
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
        © {new Date().getFullYear()} Happy Plants ♥
      </Typography>
    </Box>
  );
};

export default Footer;
