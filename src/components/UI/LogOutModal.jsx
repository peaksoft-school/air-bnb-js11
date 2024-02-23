import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, styled } from '@mui/material'
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
      <Modal open={open} onClose={onClose}>
         <Container>
            Are you sure you want to log out
            <Box className="btn-cont">
               <Button
                  variant="outlined"
                  onClick={onClose}
                  className="concel-btn"
               >
                  Cancel
               </Button>
               <Button onClick={logOutHandler} className="done-btn">
                  Yes
               </Button>
            </Box>
         </Container>
      </Modal>
   )
}

export default LogOutModal

const Container = styled(Box)(() => ({
   marginTop: '20px',

   '& .btn-cont': {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '30px',

      '& .MuiButton-root': {
         width: '100px',
      },
   },
}))
