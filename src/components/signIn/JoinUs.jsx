import { Box, Typography, styled } from '@mui/material'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import { GoogleIcon } from '../../assets/icons'

const JoinUs = ({ isOpenModal, onClose }) => {
   return (
      <StyledModal open={isOpenModal} onClose={onClose}>
         <Box className="container">
            <h3 className="heading">JOIN US</h3>
            <Typography className="description">
               Sign in with Google to start booking available listings!
            </Typography>
            <Button variant="google-button">
               <GoogleIcon />
               <h3 className="google-text">Google</h3>
            </Button>
            <a href="###" className="link">
               log in as admin
            </a>
         </Box>
      </StyledModal>
   )
}

export default JoinUs

const StyledModal = styled(Modal)(({ theme }) => ({
   '& .box': {
      width: '29.625rem',
      borderRadius: ' 0.125rem',
   },

   '& .container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
   },

   '& .heading': {
      textAlign: 'center',
      color: '#000',
      fontFamily: 'Inter',
      fontSize: '1.125rem',
      fontWeight: ' 500',
      textTransform: 'uppercase',
      marginTop: '1.56rem',
      marginBottom: '1.5rem',
   },

   '& .description': {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: '400',
      color: theme.palette.tertiary.middleGray,
      marginBottom: '1.25rem',
   },

   '& .MuiButtonBase-root.MuiButton-root.MuiButtonBase-root': {
      display: 'inline-flex',
      padding: ' 0.625rem 9.875rem',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      borderRadius: '0.5rem',
      height: '3.125rem',
      width: '26.5rem',
      border: `1px solid ${theme.palette.tertiary.lightGray}`,
      marginBottom: '2.25rem',
   },

   '& .google-text': {
      fontFamily: ' Inter',
   },

   '& .link': {
      color: theme.palette.tertiary.blue,
      marginBottom: '1.56rem',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      textDecorationLine: 'underline',
   },
}))
