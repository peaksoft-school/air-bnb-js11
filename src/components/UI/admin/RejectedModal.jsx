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

            <Box className="input-box">
               <StyledInput
                  multiline
                  placeholder="Write the reason for your rejection "
                  value={value}
                  onChange={onChange}
               />
            </Box>

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
   border: '1px solid gray',

   '&:hover': {
      border: '2px solid #828282',
   },

   '&:focus-within': {
      border: '2px solid #828282  !important',
   },

   '& .MuiInputBase-root.MuiOutlinedInput-root': {
      minHeight: '6.5rem',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'flex-start',
      height: '6.5rem',
      overflowY: 'auto',
   },

   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         border: 'none',
      },

      '&:hover fieldset': {
         border: 'none',
      },
   },

   '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
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

      '& .input-box': {
         height: '6.6rem',
         marginTop: '1.5625rem',
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
            height: '2.3125rem',
            borderRadius: '0px',
         },
      },
   },
}))
