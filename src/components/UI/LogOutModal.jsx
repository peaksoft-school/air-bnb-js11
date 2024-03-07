import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import Modal from './Modal'
import Button from './Button'
import { logout } from '../../store/slice/auth/authSlice'
import { showToast } from '../../utils/helpers/toast'

const LogOutModal = ({ open, onClose }) => {
   const dispatch = useDispatch()

   const logOutHandler = () => {
      dispatch(logout({ showToast }))
      onClose()
   }

   return (
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
   )
}

export default LogOutModal

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
      },
   },
}))
