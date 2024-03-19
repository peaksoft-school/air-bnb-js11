import { useDispatch } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import Modal from './Modal'
import Button from './Button'
import { AUTH_ACTIONS } from '../../store/slice/auth/authSlice'
import { showToast } from '../../utils/helpers/toast'

const LogOutModal = ({ open, onClose }) => {
   const dispatch = useDispatch()

   const logOutHandler = () => {
      dispatch(AUTH_ACTIONS.logOut({ showToast }))

      onClose()
   }

   return (
<<<<<<< HEAD
      <StyledModal open={open} onClose={onClose}>
         <h3 className="modal-heading">Log out</h3>

         <Typography className="description">
            Are you sure you want to Log out?
         </Typography>

         <Box className="button-box">
            <Button
               variant="cancel"
               onClick={onClose}
               className="cansel-button"
            >
               CANCEL
            </Button>

            <Button onClick={logOutHandler} className="logout-btn">
               LOG OUT
            </Button>
         </Box>
      </StyledModal>
=======
      <Modal open={open} onClose={onClose}>
         <StyledContainer>
            <h2>LOG OUT</h2>

            <p>Are you sure you want to log out</p>

            <Box className="buttons">
               <Button variant="cancel" className="cancel" onClick={onClose}>
                  CANCEL
               </Button>

               <Button className="log-out" onClick={logOutHandler}>
                  LOG OUT
               </Button>
            </Box>
         </StyledContainer>
      </Modal>
>>>>>>> development
   )
}

export default LogOutModal

<<<<<<< HEAD
const StyledModal = styled(Modal)(({ theme }) => ({
   '& .box': {
      width: '29.625rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      '& .modal-heading': {
         marginTop: '1.563rem',
         fontFamily: 'Inter',
         fontSize: '1.125rem',
         fontWeight: '500',
         color: theme.palette.primary.dark,
      },

      '& .description': {
         fontFamily: 'Inter',
         fontSize: '1rem',
         fontWeight: '400',
         lineHeight: '1.188rem',
         textAlign: 'left',
         marginTop: '1.25rem',
         color: theme.palette.primary.dark,
      },

      '& .button-box': {
         width: '100%',
         height: '2.3125rem',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         gap: '0.5rem',
         marginTop: '2.813rem',
         marginBottom: '1.563rem',

         '& .logout-btn': {
            width: '12.25rem',
            height: '2.3125rem',
         },

         '& .cansel-button': {
            width: '9.375rem',
            height: '2.3121rem',
            borderRadius: '0px',
         },
=======
const StyledContainer = styled(Box)(() => ({
   marginTop: '20px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',

   '& > h2': {
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '21.78px',
   },

   '& > p': {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '19.36px',
      marginTop: '20px',
   },

   '& > .buttons': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px',
      marginTop: '30px',

      '& > .cancel': {
         width: '150px',
      },

      '& > .log-out': {
         width: '196px',
>>>>>>> development
      },
   },
}))
