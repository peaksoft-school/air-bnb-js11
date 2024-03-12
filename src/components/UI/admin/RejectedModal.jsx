import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import Modal from '../Modal'

const RejectedModal = ({ isOpen, onClose, value, onChange, sendRequest }) => {
   const [disabled, setDisabled] = useState(false)

   useEffect(() => {
      if (value.trim() === '') {
         setDisabled(true)
      } else {
         setDisabled(false)
      }
   }, [value])

   return (
      <StyledModal open={isOpen} onClose={onClose}>
         <Box className="container">
            <h3 className="modal-heading">REJECT</h3>

            <StyledInput
               multiline
               placeholder="Write the reason for your rejection "
               value={value}
               onChange={onChange}
            />
            <Typography className="validate">
               {disabled ? 'Fill the form !' : ''}
            </Typography>

            <Box className="button-box">
               <Button
                  onClick={onClose}
                  variant="cancel"
                  className="cansel-button"
               >
                  CANSEL
               </Button>

               <Button
                  onClick={sendRequest}
                  disabled={disabled}
                  className="send-button"
               >
                  SEND
               </Button>
            </Box>
         </Box>
      </StyledModal>
   )
}
export default RejectedModal

const StyledInput = styled(Input)(() => ({
   width: '25.875rem',
   marginTop: '1.5625rem',
   padding: '10px, 8px, 10px, 16px',

   '& .MuiInputBase-root.MuiOutlinedInput-root': {
      minHeight: '6.5rem',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'flex-start',
   },
}))

const StyledModal = styled(Modal)(({ theme }) => ({
   '& .content': {
      width: '29.625rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '& .container': {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',

         '& .modal-heading': {
            marginTop: '1.5625rem',
            fontFamily: 'Inter',
            fontSize: '1.125rem',
            fontWeight: '500',
         },

         '& .validate': {
            marginTop: '0.875rem',
            height: '1.20rem',
            color: theme.palette.secondary.main,
         },
      },

      '& .button-box': {
         width: '100%',
         height: '2.3125rem',
         display: 'flex',
         justifyContent: 'flex-end',
         alignItems: 'center',
         gap: '0.5rem',
         marginTop: '1rem',

         '& .send-button': {
            width: '12.25rem',
            height: '2.3125rem',
         },

         '& .cansel-button': {
            width: '9.375rem',
            height: '2.0625rem',
            borderRadius: '0px',
         },
      },
   },
}))
