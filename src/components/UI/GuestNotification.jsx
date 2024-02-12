import React, { useState } from 'react'
import { Typography, styled } from '@mui/material'
import Modal from './Modal'
import Button from './Button'
import JoinUs from '../signIn/JoinUs'

const GuestNotification = ({ open, onClose }) => {
   const [isOpenModal, setIsOpenModal] = useState(false)

   const handleOpenModal = () => setIsOpenModal(true)
   const handleCloseModal = () => {
      setIsOpenModal(false)
      onClose()
   }

   return (
      <StyledModal open={open} onClose={onClose}>
         <Typography className="notification">
            To access this feature, please register or sign in.
         </Typography>
         <Button onClick={handleOpenModal}>Register</Button>
         <JoinUs isOpenModal={isOpenModal} onClose={handleCloseModal} />
      </StyledModal>
   )
}

export default GuestNotification

const StyledModal = styled(Modal)(({ theme }) => ({
   '& .box': {
      width: '29rem',
      height: '16rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0rem 2rem',

      '& .notification': {
         textAlign: ' center',
         color: theme.palette.tertiary.darkerGray,
         fontFamily: ' Inter',
         fontSize: ' 1rem',
         fontWeight: '500',
         textTransform: ' uppercase',
         marginTop: '1.56rem',
         marginBottom: ' 1.5rem',
      },
   },
}))
